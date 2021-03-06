## Introduction

This is a [hexo](https://github.com/tommy351/hexo) tag plugin which you can config qiniu to server your post images.

## 安装

* npm install

```
npm install hexo-qiniu-images --save
```

* 修改 ``_config.yml``.

插件区添加
```
plugins:
  - hexo-qiniu-images
```

在 `url` 配置下，添加 `images_root` 配置为自己的七牛域名

```
url: http://bammoo.github.io
images_root: http://7d9j0e.com1.z0.glb.clouddn.com/
```

* 添加目录

在 source 目录下，添加命名为 ``images`` 的目录，所有的 post 插图都放这里

* 添加 host
为了在本地可以看到图片，需要在 /etc/hosts 中设置：

```
127.0.0.1  7d9j0e.com1.z0.glb.clouddn.com
```


## 用法

```
{% qnimg imageName [class1,class2] [JSONImageAttibutes] %}
```



### 示例：

```
{% qnimg test.jpg class1,class2 %}
```

生成结果

```
 <img src="http://7d9j0e.com1.z0.glb.clouddn.com/images/test.jpg" class="class1 class2"> 
```


## Editor Snippets

### Sublime Text

可在添加这个 Snippet 到 Sublime Text 的 Packages/User/ 中

 ```
 <snippet>
    <content><![CDATA[{% qnimg $1 $2 %}]]></content>
    <tabTrigger>qnimg</tabTrigger>
    <scope>text.html.markdown</scope>
    <description>no description</description>
</snippet>
 ```