/**
 * Created by wyj on 2017/6/30.
 */
var stream = weex.requireModule('stream')

var BASE_URL='http://10.88.2.218:96/zlt/';
var API_URL={
    get_recommend_projects:BASE_URL+'recommendProjs',
    get_projects:BASE_URL+'projects'
};

function doGet (url, callback) {
    return stream.fetch({
        method: 'GET',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        type: 'json',
        url: url,
        body:''
    }, callback);

}

exports.get_recommend_projects=function(callback){
    doGet(API_URL.get_recommend_projects,callback);
};

exports.get_projects=function(page,callback){
    doGet(API_URL.get_projects+"?page="+page,callback);
};
