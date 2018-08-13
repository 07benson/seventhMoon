const ua = navigator.userAgent.toUpperCase();
let callindex = 0;
const App = {
    IS_ANDROID: ua.indexOf('ANDROID') != -1,
    IS_IOS: ua.indexOf('IPHONE OS') != -1,
    IS_KLPA: ua.indexOf('PACHAT') != -1 || ua.indexOf('PAMO') != -1,
    //模拟环境
    // IS_KLPA: true,
    getVision(){
        let start = ua.indexOf("APP/");
        let string = ua.slice(start);
        let end = string.indexOf(" BUILD");
        let vision = string.slice(4,end);
        let num = vision.split(".").join("");
        return num.slice(0,3);
    },
    call(...arg){
        let self = this;
        let name = arg[0];
        callindex ++;
        let args = arg.slice(1);
        args.forEach(function(element,index){
            if(element === "undefined"){
                args[index] = ""
            }
            else if(self.valueType(element) === "Function"){
                let callBack = name + "callBack";
                window[callBack] = element;
                args[index] = callBack;
            }
            if (self.IS_ANDROID) {// Android平台
                args[index] = '\'' + args[index] + '\'';
            }
        });
        if(self.IS_ANDROID){
            try{
                eval('window.android.' + name + '(' + args.join(',') + ')');
            }
            catch(e){
                console.log(e);
            }
        }
        else if(self.IS_IOS){
            if (args.length) {
                args = '|' + args.join('|');
            }
            let iframe = document.createElement("iframe");
            iframe.src = '#ios:' + name + args + '|' + callindex;
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            setTimeout(function(){
                document.body.removeChild(iframe);
            },1000)
        }
    },
    valueType(value){
        return Object.prototype.toString.call(value).slice(8,-1);
    }
};

export default App;
