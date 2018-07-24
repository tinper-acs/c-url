# c-url

- 创建者: jonyshi
- 创建者email: jonyshi@126.com


## 综述

URL处理工具

## 使用说明

### 方法说明

#### `query(name, scope)`

查询URL参数。

* `name`：{string} 查询URL参数名称
* `scope`：{string}  Location对象属性。默认是 `search`

	
	
		import Url  from 'c-url';
		
		// xxx.html?env=stage
		Url.query('env') // => stage 
	

#### `addParam(url, data)`

给URL中添加参数

* `url`：{string}  目标url
* `data`：{Object}  参数对象 {key: value}
	

		import Url  from 'c-url';
		
		// url = "http://xxx.html";
		Url.addParam(url, {env: 'stage'}) // => http://xxx.html?env=stage 
		

#### `delQuery(url, key)`

删除URL中的key参数

* `url`：{string}  目标url
* `key`：{strig}  参数key


		import Url  from 'c-url';
		
		// url = "http://xxx.html?env=stage ";
		Url.delQuery(url, 'env') // => http://xxx.html 


#### `parse(url)`：将URL解析为对象

* `url`：{string}  目标url
* return {Object} 解析之后的对象

		
例子：
		
		import Url  from 'c-url';
		
		// url = "http://social.pengpengla.cn/test.html?env=stage&debug=1#pl=uplive";
		Url.parse(url)
		
		// 返回的解析对象结构 =>
		{
			"url":"http://social.pengpengla.cn/test.html?env=stage&debug=1#pl=uplive",
			"scheme":"http",
			"slash":"//",
			"host":	"social.pengpengla.cn",
			"port":"",
			"path":"/test.html",
			"query":"env=stage&debug=1",
			"hash":"pl=uplive"
		}


#### `parseQuery(query)`

将URL query的字符串解析成对象

* query：待解析的query字符串

		import Url  from 'c-url';
		
		Url.parseQuery('env=stage') // => { env: 'stage'}


#### `stringify(data)`

将parse方法解析的对象序列化为URL字符串

	
		import Url  from 'c-url';
		
		let data =  {
			"url":"http://social.pengpengla.cn/test.html?env=stage&debug=1#pl=uplive",
			"scheme":"http",
			"slash":"//",
			"host":	"social.pengpengla.cn",
			"port":"",
			"path":"/test.html",
			"query":"env=stage&debug=1",
			"hash":"pl=uplive"
		};
		data.hash = 'pl=xxx';
		Url.stringify(data) // => http://social.pengpengla.cn/test.html?env=stage&debug=1#pl=xxx

