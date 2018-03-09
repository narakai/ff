/**
 * Author: xijian (Enson)
 * Date: 2/12/14
 * Time: 1:24 下午
 * Description:
 */
KISSY.add(function() {

    return {
        "api": "",
        "v": "",
        "ret": ["SUCCESS::调用成功"],
        "data": {
            "hotCity":[
                {"cityName": "北京","pinYin": "beijing","py": "bj","code":"BJS"},
                {"cityName": "广州","pinYin": "guangzhou","py": "gz","code":"CAN"},
                {"cityName": "上海","pinYin": "shanghai","py": "sh","code":"SHA"},
                {"cityName": "重庆","pinYin": "tianjin","py": "tj","code":"TSN"},
                {"cityName": "天津","pinYin": "shijiazhuang","py": "sjz","code":"SJW"},
                {"cityName": "长沙","pinYin": "tianjin","py": "tj","code":"TSN"},
                {"cityName": "成都","pinYin": "shijiazhuang","py": "sjz","code":"SJW"},
                {"cityName": "大连","pinYin": "tianjin","py": "tj","code":"TSN"},
                {"cityName": "杭州","pinYin": "shijiazhuang","py": "sjz","code":"SJW"},
                {"cityName": "昆明","pinYin": "shijiazhuang","py": "sjz","code":"SJW"},
                {"cityName": "南京","pinYin": "tianjin","py": "tj","code":"TSN"},
                {"cityName": "深圳","pinYin": "shijiazhuang","py": "sjz","code":"SJW"},
                {"cityName": "武汉","pinYin": "shijiazhuang","py": "sjz","code":"SJW"},
                {"cityName": "厦门","pinYin": "tianjin","py": "tj","code":"TSN"},
                {"cityName": "西安","pinYin": "shijiazhuang","py": "sjz","code":"SJW"}
            ],
            "citys": [
                {"cityName":"张家口","pinYin":"zhangjiakou","py":"zjk","code":"ZQZ"},
                {"cityName":"腾冲","pinYin":"tengchong","py":"tc","code":"TCZ"},
                {"cityName":"扬州","pinYin":"yangzhou","py":"yz","code":"YTY"},
                {"cityName":"天水","pinYin":"tianshui","py":"ts","code":"THQ"},
                {"cityName":"无锡","pinYin":"wuxi","py":"wx","code":"WUX"},
                {"cityName":"阿克苏","pinYin":"akesu","py":"aks","code":"AKU"},
                {"cityName":"贵阳","pinYin":"guiyang","py":"gy","code":"KWE"},
                {"cityName":"乌海","pinYin":"wuhai","py":"wh","code":"WUA"},
                {"cityName":"芒市","pinYin":"mangshi","py":"ms","code":"LUM"},
                {"cityName":"大连","pinYin":"dalian","py":"dl","code":"DLC"},
                {"cityName":"徐州","pinYin":"xuzhou","py":"xz","code":"XUZ"},
                {"cityName":"珠海","pinYin":"zhuhai","py":"zh","code":"ZUH"},
                {"cityName":"库尔勒","pinYin":"kuerle","py":"kel","code":"KRL"},
                {"cityName":"南宁","pinYin":"nanning","py":"nn","code":"NNG"},
                {"cityName":"昆明","pinYin":"kunming","py":"km","code":"KMG"},
                {"cityName":"满洲里","pinYin":"manzhouli","py":"mzl","code":"NZH"},
                {"cityName":"秦皇岛","pinYin":"qinhuangdao","py":"qhd","code":"SHP"},
                {"cityName":"武汉","pinYin":"wuhan","py":"wh","code":"WUH"},
                {"cityName":"韶关","pinYin":"shaoguan","py":"sg","code":"SHG"},
                {"cityName":"长治","pinYin":"changzhi","py":"cz","code":"CIH"},
                {"cityName":"呼和浩特","pinYin":"huhehaote","py":"hhht","code":"HET"},
                {"cityName":"喀纳斯","pinYin":"kanasi","py":"kns","code":"KJI"},
                {"cityName":"哈密","pinYin":"hami","py":"hm","code":"HMI"},
                {"cityName":"安庆","pinYin":"anqing","py":"aq","code":"AQG"},
                {"cityName":"永州","pinYin":"yongzhou","py":"yz","code":"LLF"},
                {"cityName":"临沧","pinYin":"lincang","py":"lc","code":"LNJ"},
                {"cityName":"洛阳","pinYin":"luoyang","py":"ly","code":"LYA"},
                {"cityName":"铜仁","pinYin":"tongren","py":"tr","code":"TEN"},
                {"cityName":"榆林","pinYin":"yulin","py":"yl","code":"UYN"},
                {"cityName":"克拉玛依","pinYin":"kelamayi","py":"klmy","code":"KRY"},
                {"cityName":"乌鲁木齐","pinYin":"wulumuqi","py":"wlmq","code":"URC"},
                {"cityName":"玉树","pinYin":"yushu","py":"kc","code":"YUS"},
                {"cityName":"佳木斯","pinYin":"jiamusi","py":"jms","code":"JMU"},
                {"cityName":"漠河","pinYin":"mohe","py":"kc","code":"OHE"},
                {"cityName":"嘉峪关","pinYin":"jiayuguan","py":"jyg","code":"JGN"},
                {"cityName":"通辽","pinYin":"tongliao","py":"tl","code":"TGO"},
                {"cityName":"喀什","pinYin":"kashi","py":"ks","code":"KHG"},
                {"cityName":"沈阳","pinYin":"shenyang","py":"sy","code":"SHE"},
                {"cityName":"井冈山","pinYin":"jinggangshan","py":"jgs","code":"JGS"},
                {"cityName":"乌兰浩特","pinYin":"wulanhaote","py":"wlht","code":"HLH"},
                {"cityName":"连云港","pinYin":"lianyungang","py":"lyg","code":"LYG"},
                {"cityName":"福州","pinYin":"fuzhou","py":"fz","code":"FOC"},
                {"cityName":"杭州","pinYin":"hangzhou","py":"hz","code":"HGH"},
                {"cityName":"怀化","pinYin":"huaihua","py":"hh","code":"HJJ"},
                {"cityName":"厦门","pinYin":"xiamen","py":"xm","code":"XMN"},
                {"cityName":"丽江","pinYin":"lijiang","py":"lj","code":"LJG"},
                {"cityName":"九寨沟","pinYin":"jiuzhaigou","py":"jzg","code":"JZH"},
                {"cityName":"安顺","pinYin":"anshun","py":"as","code":"AVA"},
                {"cityName":"柳州","pinYin":"liuzhou","py":"lz","code":"LZH"},
                {"cityName":"晋江","pinYin":"jinjiang","py":"jj","code":"JJN"},
                {"cityName":"遵义","pinYin":"zunyi","py":"zy","code":"ZYI"},
                {"cityName":"常德","pinYin":"changde","py":"cd","code":"CGD"},
                {"cityName":"揭阳","pinYin":"jieyang","py":"jy","code":"SWA"},
                {"cityName":"富蕴","pinYin":"fuyun","py":"fy","code":"FYN"},
                {"cityName":"酒泉","pinYin":"jiuquan","py":"jq","code":"CHW"},
                {"cityName":"潍坊","pinYin":"weifang","py":"wf","code":"WEF"},
                {"cityName":"黄山","pinYin":"huangshan","py":"hs","code":"TXN"},
                {"cityName":"林芝","pinYin":"linzhi","py":"lz","code":"LZY"},
                {"cityName":"衡阳","pinYin":"hengyang","py":"hy","code":"HNY"},
                {"cityName":"毕节","pinYin":"bijie","py":"bj","code":"BFJ"},
                {"cityName":"塔城","pinYin":"tacheng","py":"tc","code":"TCG"},
                {"cityName":"义乌","pinYin":"yiwu","py":"yw","code":"YIW"},
                {"cityName":"成都","pinYin":"chengdu","py":"cd","code":"CTU"},
                {"cityName":"那拉提","pinYin":"nalati","py":"nlt","code":"NLT"},
                {"cityName":"上海","pinYin":"shanghai","py":"sh","code":"SHA"},
                {"cityName":"深圳","pinYin":"shenzhen","py":"sz","code":"SZX"},
                {"cityName":"淮安","pinYin":"huaian","py":"ha","code":"HIA"},
                {"cityName":"达州","pinYin":"dazhou","py":"dz","code":"DAX"},
                {"cityName":"景德镇","pinYin":"jingdezhen","py":"jdz","code":"JDZ"},
                {"cityName":"兴义","pinYin":"xingyi","py":"xy","code":"ACX"},
                {"cityName":"包头","pinYin":"baotou","py":"bt","code":"BAV"},
                {"cityName":"百色","pinYin":"baise","py":"bs","code":"AEB"},
                {"cityName":"广州","pinYin":"guangzhou","py":"gz","code":"CAN"},
                {"cityName":"临沂","pinYin":"linyi","py":"ly","code":"LYI"},
                {"cityName":"蚌埠","pinYin":"bengbu","py":"bb","code":"BFU"},
                {"cityName":"大庆","pinYin":"daqing","py":"dq","code":"DQA"},
                {"cityName":"荆州","pinYin":"jingzhou","py":"jz","code":"SHS"},
                {"cityName":"迪庆","pinYin":"diqing","py":"dq","code":"DIG"},
                {"cityName":"恩施","pinYin":"enshi","py":"es","code":"ENH"},
                {"cityName":"连城","pinYin":"liancheng","py":"lc","code":"LCX"},
                {"cityName":"佛山","pinYin":"foshan","py":"fs","code":"FUO"},
                {"cityName":"朝阳","pinYin":"chaoyang","py":"cy","code":"CHG"},
                {"cityName":"绵阳","pinYin":"mianyang","py":"my","code":"MIG"},
                {"cityName":"金昌","pinYin":"jinchang","py":"jc","code":"JIC"},
                {"cityName":"西安","pinYin":"xian","py":"xa","code":"SIA"},
                {"cityName":"台州","pinYin":"taizhou","py":"tz","code":"HYN"},
                {"cityName":"九江","pinYin":"jiujiang","py":"jj","code":"JIU"},
                {"cityName":"衢州","pinYin":"quzhou","py":"qz","code":"JUZ"},
                {"cityName":"丹东","pinYin":"dandong","py":"dd","code":"DDG"},
                {"cityName":"梧州","pinYin":"wuzhou","py":"wz","code":"WUZ"},
                {"cityName":"北海","pinYin":"beihai","py":"bh","code":"BHY"},
                {"cityName":"合肥","pinYin":"hefei","py":"hf","code":"HFE"},
                {"cityName":"荔波","pinYin":"libo","py":"lb","code":"LLB"},
                {"cityName":"烟台","pinYin":"yantai","py":"yt","code":"YNT"},
                {"cityName":"吉林","pinYin":"jilin","py":"jl","code":"JIL"},
                {"cityName":"梅州","pinYin":"meizhou","py":"mz","code":"MXZ"},
                {"cityName":"广汉","pinYin":"guanghan","py":"gh","code":"GHN"},
                {"cityName":"天津","pinYin":"tianjin","py":"tj","code":"TSN"},
                {"cityName":"昭通","pinYin":"zhaotong","py":"zt","code":"ZAT"},
                {"cityName":"宜春","pinYin":"yichun","py":"yc","code":"YIC"},
                {"cityName":"唐山","pinYin":"tangshan","py":"ts","code":"TVS"},
                {"cityName":"大理","pinYin":"dali","py":"dl","code":"DLU"},
                {"cityName":"阜阳","pinYin":"fuyang","py":"fy","code":"FUG"},
                {"cityName":"青岛","pinYin":"qingdao","py":"qd","code":"TAO"},
                {"cityName":"思茅","pinYin":"simao","py":"sm","code":"SYM"},
                {"cityName":"博乐","pinYin":"bole","py":"bl","code":"BPL"},
                {"cityName":"吉安","pinYin":"jian","py":"ja","code":"KNC"},
                {"cityName":"鄯善","pinYin":"shanshan","py":"ss","code":"SXJ"},
                {"cityName":"襄阳","pinYin":"xiangyang","py":"xf","code":"XFN"},
                {"cityName":"重庆","pinYin":"chongqing","py":"cq","code":"CKG"},
                {"cityName":"齐齐哈尔","pinYin":"qiqihaer","py":"qqhe","code":"NDG"},
                {"cityName":"牡丹江","pinYin":"mudanjiang","py":"mdj","code":"MDG"},
                {"cityName":"兰州","pinYin":"lanzhou","py":"lz","code":"LHW"},
                {"cityName":"伊春","pinYin":"yichun","py":"yc","code":"LDS"},
                {"cityName":"锡林浩特","pinYin":"xilinhaote","py":"xlht","code":"XIL"},
                {"cityName":"延安","pinYin":"yanan","py":"ya","code":"ENY"},
                {"cityName":"安康","pinYin":"ankang","py":"ak","code":"AKA"},
                {"cityName":"赤峰","pinYin":"chifeng","py":"cf","code":"CIF"},
                {"cityName":"敦煌","pinYin":"dunhuang","py":"dh","code":"DNH"},
                {"cityName":"昌都","pinYin":"changdu","py":"cd","code":"BPX"},
                {"cityName":"伊宁","pinYin":"yining","py":"yn","code":"YIN"},
                {"cityName":"张家界","pinYin":"zhangjiajie","py":"zjj","code":"DYG"},
                {"cityName":"南昌","pinYin":"nanchang","py":"nc","code":"KHN"},
                {"cityName":"邯郸","pinYin":"handan","py":"hd","code":"HDG"},
                {"cityName":"运城","pinYin":"yuncheng","py":"yc","code":"YCU"},
                {"cityName":"格尔木","pinYin":"geermu","py":"gem","code":"GOQ"},
                {"cityName":"通化","pinYin":"tonghua","py":"th","code":"TNH"},
                {"cityName":"济南","pinYin":"jinan","py":"jn","code":"TNA"},
                {"cityName":"海口","pinYin":"haikou","py":"hk","code":"HAK"},
                {"cityName":"西昌","pinYin":"xichang","py":"xc","code":"XIC"},
                {"cityName":"长白山","pinYin":"changbaishan","py":"cbs","code":"NBS"},
                {"cityName":"巴彦淖尔","pinYin":"bayannaoer","py":"byne","code":"RLK"},
                {"cityName":"湛江","pinYin":"zhanjiang","py":"zj","code":"ZHA"},
                {"cityName":"哈尔滨","pinYin":"haerbin","py":"heb","code":"HRB"},
                {"cityName":"赣州","pinYin":"ganzhou","py":"gz","code":"KOW"},
                {"cityName":"石家庄","pinYin":"shijiazhuang","py":"sjz","code":"SJW"},
                {"cityName":"吐鲁番","pinYin":"tulufan","py":"tlf","code":"TLQ"},
                {"cityName":"三亚","pinYin":"sanya","py":"sy","code":"SYX"},
                {"cityName":"中卫","pinYin":"zhongwei","py":"zw","code":"ZHY"},
                {"cityName":"库车","pinYin":"kuche","py":"kc","code":"KCA"},
                {"cityName":"泸州","pinYin":"luzhou","py":"lz","code":"LZO"},
                {"cityName":"阿勒泰","pinYin":"aletai","py":"alt","code":"AAT"},
                {"cityName":"大同","pinYin":"datong","py":"dt","code":"DAT"},
                {"cityName":"南通","pinYin":"nantong","py":"nt","code":"NTG"},
                {"cityName":"太原","pinYin":"taiyuan","py":"ty","code":"TYN"},
                {"cityName":"固原","pinYin":"guyuan","py":"gy","code":"GYU"},
                {"cityName":"康定","pinYin":"kangding","py":"kd","code":"KGT"},
                {"cityName":"银川","pinYin":"yinchuan","py":"yc","code":"INC"},
                {"cityName":"南充","pinYin":"nanchong","py":"nc","code":"NAO"},
                {"cityName":"郑州","pinYin":"zhengzhou","py":"zz","code":"CGO"},
                {"cityName":"舟山","pinYin":"zhoushan","py":"zs","code":"HSN"},
                {"cityName":"惠州","pinYin":"huizhou","py":"hz","code":"AHE"},
                {"cityName":"文山","pinYin":"wenshan","py":"ws","code":"WNH"},
                {"cityName":"南京","pinYin":"nanjing","py":"nj","code":"NKG"},
                {"cityName":"汉中","pinYin":"hanzhong","py":"hz","code":"HZG"},
                {"cityName":"邢台","pinYin":"xingtai","py":"xt","code":"XNT"},
                {"cityName":"东营","pinYin":"dongying","py":"dy","code":"DOY"},
                {"cityName":"广元","pinYin":"guangyuan","py":"gy","code":"GYS"},
                {"cityName":"宜宾","pinYin":"yibin","py":"yb","code":"YBP"},
                {"cityName":"北京","pinYin":"beijing","py":"bj","code":"BJS"},
                {"cityName":"鸡西","pinYin":"jixi","py":"jx","code":"JXA"},
                {"cityName":"和田","pinYin":"hetian","py":"ht","code":"HTN"},
                {"cityName":"济宁","pinYin":"jining","py":"jn","code":"JNG"},
                {"cityName":"且末","pinYin":"qiemo","py":"qm","code":"IQM"},
                {"cityName":"黎平","pinYin":"liping","py":"lp","code":"HZH"},
                {"cityName":"苏州","pinYin":"suzhou","py":"sz","code":"SZV"},
                {"cityName":"西双版纳","pinYin":"xishuangbanna","py":"xsbn","code":"JHG"},
                {"cityName":"威海","pinYin":"weihai","py":"wh","code":"WEH"},
                {"cityName":"黑河","pinYin":"heihe","py":"hh","code":"HEK"},
                {"cityName":"盐城","pinYin":"yancheng","py":"yc","code":"YNZ"},
                {"cityName":"西宁","pinYin":"xining","py":"xn","code":"XNN"},
                {"cityName":"宜昌","pinYin":"yichang","py":"yc","code":"YIH"},
                {"cityName":"宁波","pinYin":"ningbo","py":"nb","code":"NGB"},
                {"cityName":"南阳","pinYin":"nanyang","py":"ny","code":"NNY"},
                {"cityName":"鞍山","pinYin":"anshan","py":"as","code":"AOG"},
                {"cityName":"武夷山","pinYin":"wuyishan","py":"wys","code":"WUS"},
                {"cityName":"温州","pinYin":"wenzhou","py":"wz","code":"WNZ"},
                {"cityName":"攀枝花","pinYin":"panzhihua","py":"pzh","code":"PZI"},
                {"cityName":"桂林","pinYin":"guilin","py":"gl","code":"KWL"},
                {"cityName":"庆阳","pinYin":"qingyang","py":"qy","code":"IQN"},
                {"cityName":"万州","pinYin":"wanzhou","py":"wz","code":"WXN"},
                {"cityName":"拉萨","pinYin":"lasa","py":"ls","code":"LXA"},
                {"cityName":"海拉尔","pinYin":"hailaer","py":"hle","code":"HLD"},
                {"cityName":"保山","pinYin":"baoshan","py":"bs","code":"BSD"},
                {"cityName":"常州","pinYin":"changzhou","py":"cz","code":"CZX"},
                {"cityName":"池州","pinYin":"chizhou","py":"cz","code":"JUH"},
                {"cityName":"长沙","pinYin":"changsha","py":"cs","code":"CSX"},
                {"cityName":"延吉","pinYin":"yanji","py":"yj","code":"YNJ"},
                {"cityName":"鄂尔多斯","pinYin":"eerduosi","py":"eeds","code":"DSN"},
                {"cityName":"长海","pinYin":"changhai","py":"ch","code":"CNI"},
                {"cityName":"锦州","pinYin":"jinzhou","py":"jz","code":"JNZ"},
                {"cityName":"日喀则","pinYin":"rikaze","py":"rikaze","code":"RKZ"},
                {"cityName":"阿里","pinYin":"ali","py":"ali","code":"NGQ"},
                {"cityName":"加格达奇","pinYin":"jiagedaqi","py":"jiagedaqi","code":"JGD"},
                {"cityName":"二连浩特","pinYin":"erlianhaote","py":"elht","code":"ERL"},
                {"cityName":"长春","pinYin":"changchun","py":"cc","code":"CGQ"}
            ]
        }
    }
})
