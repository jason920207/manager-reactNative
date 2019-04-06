import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeFetch } from '../actions'
import { ListView }  from 'react-native'
import ListItem from './ListItem'
import _ from 'lodash'

class EmployeeList extends Component {
  componentWillMount(){
    this.props.employeeFetch()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.dataSource = ds.cloneWithRows(employees)

  }

  renderRow(employee){
    return <ListItem employee={employee} />
  }
  render(){
    console.log(this.props)
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val,uid) => {
    return { ...val, uid }
  })

  return { employees }
}
export default connect(mapStateToProps,{ employeeFetch })(EmployeeList)
