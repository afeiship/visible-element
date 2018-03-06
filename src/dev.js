import './dev.scss';
import ReactMediaLautoRfixed from './main';

/*===example start===*/

// install: npm install afeiship/react-media-lauto-rfixed --save
// import : import ReactMediaLautoRfixed from 'react-media-lauto-rfixed'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-media-lauto-rfixed">
      <ReactMediaLautoRfixed
      aside={
        <img src="http://cms-bucket.nosdn.127.net/e99ac4afe74d4375b321d50178772d9620180306123403.png" width="100" />
      }
      elements={[
        <h1 style={{ fontSize:'14px'}} className="title">金正恩:要由朝鲜民族自己谱写祖国统一新历史</h1>,
        <p style={{ fontSize:'12px', lineHeight: '16px', color:'#999'}} > <em style={{ float: 'right'}}>2018-03-06 13:06:36</em> <span>新闻 &nbsp; 10分钟前</span></p>
      ]} />

      <ReactMediaLautoRfixed
      aside={
          <img src="http://cms-bucket.nosdn.127.net/e86633e3eeff4e0aa4ac103934c6989f20180305191752.png" width="94" />
        }
        elements={[
          <h1 style={{ fontSize:'14px'}} className="title">政府工作报告提取消流量漫游费 三运营商:立即行动</h1>,
          <p style={{ fontSize:'12px', lineHeight: '16px', color:'#999'}} > <em style={{ float: 'right'}}>2018-03-06 13:06:36</em> <span>新闻 &nbsp; 10分钟前</span></p>
        ]}/>

        <ReactMediaLautoRfixed
        style={{ minHeight: '70px'}}
        elements={[
          <h1 style={{ fontSize:'14px'}} className="title">政府工作报告提取消流量漫游费 三运营商:立即行动 -  红海或者是战狼都可以的</h1>,
          <p style={{ fontSize:'12px', lineHeight: '16px', color:'#999'}} > <em style={{ float: 'right'}}>2018-03-06 13:06:36</em> <span>新闻 &nbsp; 10分钟前</span></p>
        ]}/>
      </div>


    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
