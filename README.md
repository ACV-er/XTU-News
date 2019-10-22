# xtu-news [![Build Status](https://travis-ci.org/LBinin/XTU-News.png?branch=master)](https://travis-ci.org/LBinin/XTU-News)

> 湘大新闻网

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## api definition

### 首页

url: `/home.php`

method: `GET`

params:  

return:

```json5
{
    "code": 0,
    "data": {
        "list": {
            // mediaInfo
            "shouyejiaodiantu": [ // sliderList
                {
                    // ${item.origin_news_id || item.news_id}
                    "origin_news_id": 0,
                    "news_id": 0,
                    // item.pic
                    "pic": "",
                    // item.title
                    "title": "",
                    // item.description
                    "description": "",
                    // item.mtime.split(' ')[0].split('-')[2]
                    // type(date) or type(datetime)
                    "mtime": "2019-01-01",
                }
            ],
            "meitixiangda": [ // mediaList
                {
                    // item.news_id
                    "news_id": 0,
                    // item.mtime
                    "mtime": "2019-01-01 00:00:00",
                    // item.view_count
                    // 浏览量
                    "view_count": 1,
                    // ${item.type}
                    // data image type
                    "type": "xxx",
                    // item.title
                    "title": ""
                }
            ],
            // newsInfo
            "zonghexinwen": [ // newsList
                // id0 为 figure
                {
                    // <router-link :to="`news/view/${figureInfo.news_id}`">
                    "news_id": 0,
                    "title": "",
                    "pic": "",
                    "description": "",
                    "linkUrl": "",
                    // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
                    "type": "",
                    "mtime": "",
                }
            ],
            "jinqiredian": [ // hotSpotsList
                {
                    // <router-link :to="`news/view/${figureInfo.news_id}`">
                    "news_id": 0,
                    "title": "",
                    "pic": "",
                    "description": "",
                    "linkUrl": "",
                    // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
                    "type": "",
                    "mtime": "",
                }
            ],
            // communicationInfo
            "yuanxichuanzhen": [ // faxList
                {
                    // <router-link :to="`news/view/${figureInfo.news_id}`">
                    "news_id": 0,
                    "title": "",
                    "pic": "",
                    "description": "",
                    "linkUrl": "",
                    // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
                    "type": "",
                    "mtime": "",
                }
            ],
            "xiangdaxiaobao": [ // paperList
                {
                    // <router-link :to="`news/view/${figureInfo.news_id}`">
                    "news_id": 0,
                    "title": "",
                    "pic": "",
                    "description": "",
                    "linkUrl": "",
                    // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
                    "type": "",
                    "mtime": "",
                }
            ],
            // markInfo
            "xiangdayinji": [ // markList
                {
                    // <router-link :to="`news/view/${figureInfo.news_id}`">
                    "news_id": 0,
                    "title": "",
                    "pic": "",
                    "description": "",
                    "linkUrl": "",
                    // router-link v-else :to="`/${item.type}/view/${item.news_id}`" :title="item.title">{{ item.title }}
                    "type": "",
                    "mtime": "",
                }
            ]
        }
    }
}
```

### 综合新闻列表

url: `/newslist.php?letter=zonghexinwen`

method: `GET`

params:  

param | location | type | example
-|-|-|-
page|query|number|1
limit|query|number|10

return:

```json5
{
    "code": 0,
    "count": 1,
    "data": {
        "list": [
            {
                "news_id": 0,
                // item.pic
                "pic": "",
                // item.title
                "title": "",
                // item.description
                "description": "",
                // type(date) or type(datetime)
                "mtime": "2019-01-01 00:00:00",
                "view_count": 0
            }
        ],
    }
}
```

### 新闻页面

url: `/news.php`

method: `GET`

params:

param | location | type | example
-|-|-|-
news_id|query|number|1

return:

```json5
{
    "code": 0,
    "data": {
        "title": "标题",
        "mtime": "2019-01-01 00:00:00",
        "content": "内容"
    }
}
```

### 媒体湘大列表

url: `/newslist.php?letter=meitixiangda`

method: `GET`

params:

param | location | type | example
-|-|-|-
page|query|number|1
limit|query|number|10

return:

```json5
{
    "code": 0,
    "count": 1,
    "data": {
        "list": [
            {
                "news_id": 0,
                // item.pic
                "pic": "",
                // item.title
                "title": "",
                // item.description
                "description": "",
                // type(date) or type(datetime)
                "mtime": "2019-01-01 00:00:00",
                "view_count": 0
            }
        ],
    }
}
```

### 院系传真列表

url: `/newslist.php?letter=yuanxichuanzhen`

method: `GET`

params:

param | location | type | example
-|-|-|-
page|query|number|1
limit|query|number|10

return:

```json5
{
    "code": 0,
    "count": 1,
    "data": {
        "list": [
            {
                "news_id": 0,
                // item.pic
                "pic": "",
                // item.title
                "title": "",
                // item.description
                "description": "",
                // type(date) or type(datetime)
                "mtime": "2019-01-01 00:00:00",
                "view_count": 0
            }
        ],
    }
}
```

### 视频新闻列表

url: `/newslist.php?letter=shipinxinwen`

method: `GET`

params:

param | location | type | example
-|-|-|-
page|query|number|1
limit|query|number|10

return:

```json5
{
    "code": 0,
    "count": 1,
    "data": {
        "list": [
            {
                "news_id": 0,
                // item.pic
                "pic": "",
                // item.title
                "title": "",
                // item.description
                "description": "",
                // type(date) or type(datetime)
                "mtime": "2019-01-01 00:00:00",
                "view_count": 0
            }
        ],
    }
}
```

### 湘大人物列表

url: `/newslist.php?letter=xiangdarenwu`

method: `GET`

params:

param | location | type | example
-|-|-|-
page|query|number|1
limit|query|number|10

return:

```json5
{
    "code": 0,
    "count": 1,
    "data": {
        "list": [
            {
                "news_id": 0,
                // item.pic
                "pic": "",
                // item.title
                "title": "",
                // item.description
                "description": "",
                // type(date) or type(datetime)
                "mtime": "2019-01-01 00:00:00",
                "view_count": 0
            }
        ],
    }
}
```

### 近期热点列表

url: `/hotlist.php`

method: `GET`

params:

param | location | type | example
-|-|-|-
limit|query|number|10

return:

```json5
{
    "code": 0,
    "count": 1,
    "data": {
        "list": [
            {
                "news_id": 0,
                // item.title
                "title": "",
                // router-link :title="item.title" :to="`/${item.type}/view/${item.news_id}`
                "type": "",
                // type(date) or type(datetime)
                "mtime": "2019-01-01 00:00:00",
                "view_count": 0
            }
        ],
    }
}
```

### 发表

url: `/addContent.php`

method: `POST`

params:

```json5
{
    "title": "标题",
    "author": "作者",
    "tel": "电话",
    "belongs": "组织",
    "mark": "备注",
    "file": "文件"
}
```

return:

### API template

```markdown
### xx

url: `/`

method: `GET`

params:

param | location | type | example
-|-|-|-

return:

```
