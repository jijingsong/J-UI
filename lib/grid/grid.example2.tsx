import * as React from 'react'
import { Row, Col } from './grid'
import './grid.example.scss'

const GridExample: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Row className='grid-demo-wrap' gutter={16}>
        <Col span={8}>
          <div>Col-8</div>
        </Col>
        <Col span={8}>
          <div>Col-8</div>
        </Col>
        <Col span={8}>
          <div>Col-8</div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default GridExample