interface FormValue {
    [k: string]: any
}

interface FormRule {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: RegExp,
    validator?: (value: string) => Promise<string>
}
type FormRules = Array<FormRule>

const isEmpty = (value: any) => {
    return value === undefined || value === null || value === ''
}

const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void): void => {
    let errors: any = {}
    const addErrors = (key: string, message: string | Promise<string>) => {
        if (errors[key] === undefined) {
            errors[key] = []
        }
        errors[key].push(message)
    }
    rules.map(rule => {
        const value = formValue[rule.key]
        if (rule.required && isEmpty(value)) {
            addErrors(rule.key, '请输入')
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addErrors(rule.key, '长度太短')
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addErrors(rule.key, '长度太长')
        }
        if (rule.pattern && !rule.pattern.test(value)) {
            addErrors(rule.key, '请输入6-12位字母')
        }
        if (rule.validator) {
            const promise = rule.validator(value)
            addErrors(rule.key, promise)
        }
    })

    console.log('errors: ', errors);
    const errorList = flat(Object.keys(errors).map(key => {
        let errorArr = errors[key]
        return errorArr.map((error: string | Promise<string>) => {
            return [key, error]
        })
    }))
    console.log('errorList: ', errorList);

    const promiseList = errorList.map((arr: Array<any>) => {
        let [key, promiseOrString] = arr
        const promise = promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString)
        return promise.then(() => [key, undefined], (reason) => [key, reason])
    })
    Promise.all(promiseList).then(res => {
        console.log('res: ', res);
        let errorsMap: any = {}
        res.filter((el: Array<string>) => el[1]).forEach((item: Array<string>) => {
            let [key, error] = item
            if (!errorsMap[key]) errorsMap[key] = []
            errorsMap[key].push(error)
        })
        console.log('errorsMap: ', errorsMap);
        callback(errorsMap)
    }, (err) => {
        console.log('err: ', err);
    })
}

export default Validator

const flat = (arr: Array<any>) => arr.reduce((pre, cur) => pre.concat(cur), [])