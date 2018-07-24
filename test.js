import './test.css';
import url from './src/index';

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';


class Text extends Component {


    constructor(props) {
        super(props);
    } 

    componentDidMount() {
        $('#query').click(() => {
        	alert(url.query('env'));
        });

        $('#addParam').click(() => {
        	let _url = location.href;
        	
        	_url = url.delQuery(_url, 'debug');
        	location.href = url.addParam(_url, {debug: 1});
        });

        $('#delQuery').click(() => {
        	location.href = url.delQuery(location.href, 'debug');
        });

        $('#parse').click(() => {
        	let _url = location.href;
        	let obj = url.parse(_url);
        	console.log(obj);
        	alert(JSON.stringify(obj));
        });

        $('#parseQuery').click(() => {
        	let _url = location.href;
        	let obj = url.parse(_url);
        	let qObj = url.parseQuery(obj.query);
        	console.log(obj, qObj);
        	alert(JSON.stringify(qObj));
        });

        $('#stringify').click(() => {
        	let _url = location.href;
        	let obj = url.parse(_url);
        	obj.hash = 'pl=xxx';
        	alert(url.stringify(obj));
        });

    }
    render() {
        return (
            <div>
                <h1>component/c-url</h1>
                <div className="demo">
                    <div className="demo-item">
                        <h2>获取参数：env</h2>
                        <button className="button-primary" id="query">获取参数</button>
                    </div>
                    <div className="demo-item">
                        <h2>给URL添加参数</h2>
                        <button className="button-primary" id="addParam">添加参数：debug = 1</button>
                    </div>
                    <div className="demo-item">
                        <h2>URL删除参数</h2>
                        <button className="button-primary" id="delQuery">删除参数：debug</button>
                    </div>
                    <div className="demo-item">
                        <h2>将URL解析成对象</h2>
                        <button className="button-primary" id="parse">解析当前url</button>
                    </div>
                    <div className="demo-item">
                        <h2>将URL query字符串解析成对象</h2>
                        <button className="button-primary" id="parseQuery">解析当前url query</button>
                    </div>
                    <div className="demo-item">
                        <h2>将parse方法解析的对象序列化为URL字符串</h2>
                        <button className="button-primary" id="stringify">stringify对象</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<Text />, $('#wrap')[0]); 