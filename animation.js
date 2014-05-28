 function init() {
            if (window.top != window) {
                        document.getElementById("header").style.display = "none";
            }

                createjs.CSSPlugin.install(createjs.Tween);

                createjs.Ticker.setFPS(20);
                var count = 0;
                while (++count <= 55) {
                        var box = document.createElement("div");
                        box.style.width = "11px";
                        box.style.height = "11px";
                        box.style.position = "absolute";
                        box.style.borderRadius = "2px";
                        box.style.backgroundColor = "#474747";
                        box.style.opacity = "0";
                        document.body.appendChild(box);
                        var a = (Math.random()*Math.PI*2*16|0)/16;
                        box.style.webkitTransform = "rotate("+a+"rad)";
                        var d = 90;
                        box.style.left = window.innerWidth/2+Math.cos(a-0.2-Math.random())*d+"px";
                        box.style.top = window.innerHeight/2+Math.sin(a-0.2-Math.random())*d+"px";
                        d = (Math.min(window.innerWidth,window.innerHeight)-16)/2*(Math.random()*0.3);

                        if(count<=20){
                        var e = 85 + (Math.random() * ((90 - 85) + 1));

                        var x = window.innerWidth/2+Math.cos(18*count)*e;
                        var y = window.innerHeight/2+Math.sin(18*count)*e;

                        }else if(count >20 && count <=39){
                         var e = 65 + (Math.random() * ((71 - 65) + 1));

                        var x = window.innerWidth/2+Math.cos(count)*e;
                        var y = window.innerHeight/2+Math.sin(count)*e;

                        }else if(count >39 && count <= 49){
                          var e = 35 + (Math.random() * ((50 - 35) + 1));

			    var x = window.innerWidth/2+Math.cos(18*count)*e;
                        var y = window.innerHeight/2+Math.sin(18*count)*e;

			    }else if(count >49 && count <=55){
                        var e = 13 + (Math.random() * ((20 - 13) + 1));

				var x = window.innerWidth/2+Math.cos(count)*e;
                        var y = window.innerHeight/2+Math.sin(count)*e;
                      }

createjs.Tween.get(box, {loop:false}, true).wait(Math.random()*1000+1|0).to({top:y,left:x,wi\
dth:11,height:11,opacity:1},Math.random()*1500+1000,easeIn);
                        box.style.webkitTransform = "rotate("+Math.PI/4+"rad)";
                }
        }



        // very simple easing equation:


        function easeIn(ratio) {
                return ratio*ratio;
        }


