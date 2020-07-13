import React, {Component} from 'react';
import './UserInfo.scss';

class UserInfo extends Component {
  render() {
    return (
        <div className="userInfo">
          <h2>Leanne&nbsp;Graham</h2>
          <span className="contact">Contact&nbsp;Me@</span>
          <label className='email'>
            <ul>Email</ul>
            <ul>Sincere@april.biz</ul>
          </label>
          <label className='phone'>
            <ul>Phone</ul>
            <ul>1-770-736-8031</ul>
          </label>
          <label className='website'>
            <ul>Website</ul>
            <ul>hildegard.org</ul>
          </label>
          <label className='website'>
            <ul>Company</ul>
            <ul>Romaguera-Crona</ul>
          </label>
        </div>
    );
  }
}

export default UserInfo;
