import * as React from 'react'
import { Row, Col } from './grid'
import './grid.example.scss'

const GridExample: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Row className='grid-demo-wrap'>
        <Col span={8}>
          <div>Col-8</div>
        </Col>
        <Col span={8} offset={8}>
          <div>Col-8</div>
        </Col>
      </Row>
      <br/>
      <Row className='grid-demo-wrap'>
        <Col span={6} offset={6}>
          <div>Col-6 Col-offset-6</div>
        </Col>
        <Col span={6} offset={6}>
          <div>Col-6 Col-offset-6</div>
        </Col>
      </Row>
      <br/>
      <Row className='grid-demo-wrap'>
        <Col span={12} offset={6}>
          <div>Col-12 Col-offset-6</div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default GridExample