/**
 * Created by wyj on 2017/6/30.
 */

exports.get_item_from_result=function(json){
    if(!json || !json.kdjson
        || json.kdjson.flag !='1' || json.kdjson.length==0){
        return null;
    }

    return json.kdjson.items[0];

};

exports.get_items_from_result=function(json){
    if(!json || !json.kdjson
        || json.kdjson.flag !='1' || json.kdjson.length==0){
        return null;
    }

    return json.kdjson.items;

};