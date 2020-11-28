!function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t:"function"==typeof define&&define.amd?define("JZZ.synth.Tiny",["JZZ"],t):t(JZZ)}(function(s){var e,a,i,n,r;function v(t){for(var n in this.__proto__=this.sy={is:"webaudio-tinysynth",properties:{masterVol:{type:Number,value:.5,observer:"setMasterVol"},reverbLev:{type:Number,value:.3,observer:"setReverbLev"},quality:{type:Number,value:1,observer:"setQuality"},debug:{type:Number,value:0},src:{type:String,value:null,observer:"loadMIDIUrl"},loop:{type:Number,value:0},tsmode:{type:Number,value:0},voices:{type:Number,value:64},useReverb:{type:Number,value:1}},program:[],drummap:[],program1:[[{w:"sine",v:.4,d:.7,r:.1},{w:"triangle",v:3,d:.7,s:.1,g:1,a:.01,k:-1.2}],[{w:"triangle",v:.4,d:.7,r:.1},{w:"triangle",v:4,t:3,d:.4,s:.1,g:1,k:-1,a:.01}],[{w:"sine",d:.7,r:.1},{w:"triangle",v:4,f:2,d:.5,s:.5,g:1,k:-1}],[{w:"sine",d:.7,v:.2},{w:"triangle",v:4,t:3,f:2,d:.3,g:1,k:-1,a:.01,s:.5}],[{w:"sine",v:.35,d:.7},{w:"sine",v:3,t:7,f:1,d:1,s:1,g:1,k:-.7}],[{w:"sine",v:.35,d:.7},{w:"sine",v:8,t:7,f:1,d:.5,s:1,g:1,k:-.7}],[{w:"sawtooth",v:.34,d:2},{w:"sine",v:8,f:.1,d:2,s:1,r:2,g:1}],[{w:"triangle",v:.34,d:1.5},{w:"square",v:6,f:.1,d:1.5,s:.5,r:2,g:1}],[{w:"sine",d:.3,r:.3},{w:"sine",v:7,t:11,d:.03,g:1}],[{w:"sine",d:.3,r:.3},{w:"sine",v:11,t:6,d:.2,s:.4,g:1}],[{w:"sine",v:.2,d:.3,r:.3},{w:"sine",v:11,t:5,d:.1,s:.4,g:1}],[{w:"sine",v:.2,d:.6,r:.6},{w:"triangle",v:11,t:5,f:1,s:.5,g:1}],[{w:"sine",v:.3,d:.2,r:.2},{w:"sine",v:6,t:5,d:.02,g:1}],[{w:"sine",v:.3,d:.2,r:.2},{w:"sine",v:7,t:11,d:.03,g:1}],[{w:"sine",v:.2,d:1,r:1},{w:"sine",v:11,t:3.5,d:1,r:1,g:1}],[{w:"triangle",v:.2,d:.5,r:.2},{w:"sine",v:6,t:2.5,d:.2,s:.1,r:.2,g:1}],[{w:"w9999",v:.22,s:.9},{w:"w9999",v:.22,t:2,f:2,s:.9}],[{w:"w9999",v:.2,s:1},{w:"sine",v:11,t:6,f:2,s:.1,g:1,h:.006,r:.002,d:.002},{w:"w9999",v:.2,t:2,f:1,h:0,s:1}],[{w:"w9999",v:.2,d:.1,s:.9},{w:"w9999",v:.25,t:4,f:2,s:.5}],[{w:"w9999",v:.3,a:.04,s:.9},{w:"w9999",v:.2,t:8,f:2,a:.04,s:.9}],[{w:"sine",v:.2,a:.02,d:.05,s:1},{w:"sine",v:6,t:3,f:1,a:.02,d:.05,s:1,g:1}],[{w:"triangle",v:.2,a:.02,d:.05,s:.8},{w:"square",v:7,t:3,f:1,d:.05,s:1.5,g:1}],[{w:"square",v:.2,a:.02,d:.2,s:.5},{w:"square",v:1,d:.03,s:2,g:1}],[{w:"square",v:.2,a:.02,d:.1,s:.8},{w:"square",v:1,a:.3,d:.1,s:2,g:1}],[{w:"sine",v:.3,d:.5,f:1},{w:"triangle",v:5,t:3,f:-1,d:1,s:.1,g:1}],[{w:"sine",v:.4,d:.6,f:1},{w:"triangle",v:12,t:3,d:.6,s:.1,g:1,f:-1}],[{w:"triangle",v:.3,d:1,f:1},{w:"triangle",v:6,f:-1,d:.4,s:.5,g:1,t:3}],[{w:"sine",v:.3,d:1,f:-1},{w:"triangle",v:11,f:1,d:.4,s:.5,g:1,t:3}],[{w:"sine",v:.4,d:.1,r:.01},{w:"sine",v:7,g:1}],[{w:"triangle",v:.4,d:1,f:1},{w:"square",v:4,f:-1,d:1,s:.7,g:1}],[{w:"triangle",v:.35,d:1,f:1},{w:"square",v:7,f:-1,d:.3,s:.5,g:1}],[{w:"sine",v:.2,t:1.5,a:.005,h:.2,d:.6},{w:"sine",v:11,t:5,f:2,d:1,s:.5,g:1}],[{w:"sine",d:.3},{w:"sine",v:4,t:3,d:1,s:1,g:1}],[{w:"sine",d:.3},{w:"sine",v:4,t:3,d:1,s:1,g:1}],[{w:"w9999",d:.3,v:.7,s:.5},{w:"sawtooth",v:1.2,d:.02,s:.5,g:1,h:0,r:.02}],[{w:"sine",d:.3},{w:"sine",v:4,t:3,d:1,s:1,g:1}],[{w:"triangle",v:.3,t:2,d:1},{w:"triangle",v:15,t:2.5,d:.04,s:.1,g:1}],[{w:"triangle",v:.3,t:2,d:1},{w:"triangle",v:15,t:2.5,d:.04,s:.1,g:1}],[{w:"triangle",d:.7},{w:"square",v:.4,t:.5,f:1,d:.2,s:10,g:1}],[{w:"triangle",d:.7},{w:"square",v:.4,t:.5,f:1,d:.2,s:10,g:1}],[{w:"sawtooth",v:.4,a:.1,d:11},{w:"sine",v:5,d:11,s:.2,g:1}],[{w:"sawtooth",v:.4,a:.1,d:11},{w:"sine",v:5,d:11,s:.2,g:1}],[{w:"sawtooth",v:.4,a:.1,d:11},{w:"sine",v:5,t:.5,d:11,s:.2,g:1}],[{w:"sawtooth",v:.4,a:.1,d:11},{w:"sine",v:5,t:.5,d:11,s:.2,g:1}],[{w:"sine",v:.4,a:.1,d:11},{w:"sine",v:6,f:2.5,d:.05,s:1.1,g:1}],[{w:"sine",v:.3,d:.1,r:.1},{w:"square",v:4,t:3,d:1,s:.2,g:1}],[{w:"sine",v:.3,d:.5,r:.5},{w:"sine",v:7,t:2,f:2,d:1,r:1,g:1}],[{w:"triangle",v:.6,h:.03,d:.3,r:.3,t:.5},{w:"n0",v:8,t:1.5,d:.08,r:.08,g:1}],[{w:"sawtooth",v:.3,a:.03,s:.5},{w:"sawtooth",v:.2,t:2,f:2,d:1,s:2}],[{w:"sawtooth",v:.3,f:-2,a:.03,s:.5},{w:"sawtooth",v:.2,t:2,f:2,d:1,s:2}],[{w:"sawtooth",v:.2,a:.02,s:1},{w:"sawtooth",v:.2,t:2,f:2,a:1,d:1,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1},{w:"sawtooth",v:.2,f:2,a:.02,d:1,s:1}],[{w:"triangle",v:.3,a:.03,s:1},{w:"sine",v:3,t:5,f:1,d:1,s:1,g:1}],[{w:"sine",v:.4,a:.03,s:.9},{w:"sine",v:1,t:2,f:3,d:.03,s:.2,g:1}],[{w:"triangle",v:.6,a:.05,s:.5},{w:"sine",v:1,f:.8,d:.2,s:.2,g:1}],[{w:"square",v:.15,a:.01,d:.2,r:.2,t:.5,h:.03},{w:"square",v:4,f:.5,d:.2,r:11,a:.01,g:1,h:.02},{w:"square",v:.15,t:4,f:1,a:.02,d:.15,r:.15,h:.03},{g:3,w:"square",v:4,f:-.5,a:.01,h:.02,d:.15,r:11}],[{w:"square",v:.2,a:.01,d:1,s:.6,r:.04},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.5,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.04,d:1,s:.4,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.15,a:.04,s:1},{w:"sine",v:2,d:.1,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.5,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.6,r:.08},{w:"sine",v:1,f:.2,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:.5,s:.7,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.5,r:.08},{w:"sine",v:1,d:.1,s:4,g:1}],[{w:"square",v:.2,a:.02,d:2,s:.6},{w:"sine",v:2,d:1,g:1}],[{w:"square",v:.2,a:.02,d:2,s:.6},{w:"sine",v:2,d:1,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.6},{w:"sine",v:2,d:1,g:1}],[{w:"square",v:.2,a:.02,d:1,s:.6},{w:"sine",v:2,d:1,g:1}],[{w:"sine",v:.4,a:.02,d:.7,s:.5},{w:"square",v:5,t:2,d:.2,s:.5,g:1}],[{w:"sine",v:.3,a:.05,d:.2,s:.8},{w:"sawtooth",v:6,f:.1,d:.1,s:.3,g:1}],[{w:"sine",v:.3,a:.03,d:.2,s:.4},{w:"square",v:7,f:.2,d:1,s:.1,g:1}],[{w:"square",v:.2,a:.05,d:.1,s:.8},{w:"square",v:4,d:.1,s:1.1,g:1}],[{w:"sine",a:.02,d:2},{w:"sine",v:6,t:2,d:.04,g:1}],[{w:"sine",v:.7,a:.03,d:.4,s:.4},{w:"sine",v:4,t:2,f:.2,d:.4,g:1}],[{w:"sine",v:.7,a:.02,d:.4,s:.6},{w:"sine",v:3,t:2,d:0,s:1,g:1}],[{w:"sine",v:.4,a:.06,d:.3,s:.3},{w:"sine",v:7,t:2,d:.2,s:.2,g:1}],[{w:"sine",a:.02,d:.3,s:.3},{w:"sawtooth",v:3,t:2,d:.3,g:1}],[{w:"sine",v:.4,a:.02,d:2,s:.1},{w:"sawtooth",v:8,t:2,f:1,d:.5,g:1}],[{w:"sine",v:.7,a:.03,d:.5,s:.3},{w:"sine",v:.003,t:0,f:4,d:.1,s:.002,g:1}],[{w:"sine",v:.7,a:.02,d:2},{w:"sine",v:1,t:2,f:1,d:.02,g:1}],[{w:"square",v:.3,d:1,s:.5},{w:"square",v:1,f:.2,d:1,s:.5,g:1}],[{w:"sawtooth",v:.3,d:2,s:.5},{w:"square",v:2,f:.1,s:.5,g:1}],[{w:"triangle",v:.5,a:.05,d:2,s:.6},{w:"sine",v:4,t:2,g:1}],[{w:"triangle",v:.3,a:.01,d:2,s:.3},{w:"sine",v:22,t:2,f:1,d:.03,s:.2,g:1}],[{w:"sawtooth",v:.3,d:1,s:.5},{w:"sine",v:11,t:11,a:.2,d:.05,s:.3,g:1}],[{w:"sine",v:.3,a:.06,d:1,s:.5},{w:"sine",v:7,f:1,d:1,s:.2,g:1}],[{w:"sawtooth",v:.3,a:.03,d:.7,s:.3,r:.2},{w:"sawtooth",v:.3,t:.75,d:.7,a:.1,s:.3,r:.2}],[{w:"triangle",v:.3,a:.01,d:.7,s:.5},{w:"square",v:5,t:.5,d:.7,s:.5,g:1}],[{w:"triangle",v:.3,a:.02,d:.3,s:.3,r:.3},{w:"square",v:3,t:4,f:1,a:.02,d:.1,s:1,g:1},{w:"triangle",v:.08,t:.5,a:.1,h:0,d:.1,s:.5,r:.1,b:0,c:0}],[{w:"sine",v:.3,a:.05,d:1,s:.7,r:.3},{w:"sine",v:2,f:1,d:.3,s:1,g:1}],[{w:"square",v:.3,a:.03,d:.5,s:.3,r:.1},{w:"square",v:4,f:1,a:.03,d:.1,g:1}],[{w:"triangle",v:.3,a:.08,d:1,s:.3,r:.1},{w:"square",v:2,f:1,d:.3,s:.3,g:1,t:4,a:.08}],[{w:"sine",v:.3,a:.05,d:1,s:.3,r:.1},{w:"sine",v:.1,t:2.001,f:1,d:1,s:50,g:1}],[{w:"triangle",v:.3,a:.03,d:.7,s:.3,r:.2},{w:"sine",v:12,t:7,f:1,d:.5,s:1.7,g:1}],[{w:"sine",v:.3,a:.05,d:1,s:.3,r:.1},{w:"sawtooth",v:22,t:6,d:.06,s:.3,g:1}],[{w:"triangle",v:.3,a:.05,d:11,r:.3},{w:"triangle",v:1,d:1,s:8,g:1}],[{w:"sawtooth",v:.3,d:4,s:.8,r:.1},{w:"square",v:1,t:2,f:8,a:1,d:1,s:1,r:.1,g:1}],[{w:"triangle",v:.3,d:1,s:.5,t:.8,a:.2,p:1.25,q:.2},{w:"sawtooth",v:.2,a:.2,d:.3,s:1,t:1.2,p:1.25,q:.2}],[{w:"sine",v:.3,d:1,s:.3},{w:"square",v:22,t:11,d:.5,s:.1,g:1}],[{w:"sawtooth",v:.3,a:.04,d:1,s:.8,r:.1},{w:"square",v:1,t:.5,d:1,s:2,g:1}],[{w:"triangle",v:.3,d:1,s:.3},{w:"sine",v:22,t:6,d:.6,s:.05,g:1}],[{w:"sine",v:.6,a:.1,d:.05,s:.4},{w:"sine",v:5,t:5,f:1,d:.05,s:.3,g:1}],[{w:"sine",a:.1,d:.05,s:.4,v:.8},{w:"sine",v:5,t:5,f:1,d:.05,s:.3,g:1}],[{w:"square",v:.3,a:.1,d:.1,s:.4},{w:"square",v:1,f:1,d:.3,s:.1,g:1}],[{w:"sawtooth",v:.3,d:.5,r:.5},{w:"sawtooth",v:11,t:5,d:.05,g:1}],[{w:"square",v:.3,d:.2,r:.2},{w:"square",v:7,t:3,d:.05,g:1}],[{w:"triangle",d:.2,r:.2},{w:"square",v:9,t:3,d:.1,r:.1,g:1}],[{w:"triangle",d:.3,r:.3},{w:"square",v:6,t:3,d:1,r:1,g:1}],[{w:"triangle",v:.4,d:.2,r:.2},{w:"square",v:22,t:12,d:.1,r:.1,g:1}],[{w:"sine",v:.25,a:.02,d:.05,s:.8},{w:"square",v:1,t:2,d:.03,s:11,g:1}],[{w:"sine",v:.3,a:.05,d:11},{w:"square",v:7,t:3,f:1,s:.7,g:1}],[{w:"square",v:.3,a:.05,d:.1,s:.8},{w:"square",v:4,d:.1,s:1.1,g:1}],[{w:"sine",v:.4,d:.3,r:.3},{w:"sine",v:7,t:9,d:.1,r:.1,g:1}],[{w:"sine",v:.7,d:.1,r:.1},{w:"sine",v:22,t:7,d:.05,g:1}],[{w:"sine",v:.6,d:.15,r:.15},{w:"square",v:11,t:3.2,d:.1,r:.1,g:1}],[{w:"sine",v:.8,d:.07,r:.07},{w:"square",v:11,t:7,r:.01,g:1}],[{w:"triangle",v:.7,t:.5,d:.2,r:.2,p:.95},{w:"n0",v:9,g:1,d:.2,r:.2}],[{w:"sine",v:.7,d:.1,r:.1,p:.9},{w:"square",v:14,t:2,d:.005,r:.005,g:1}],[{w:"square",d:.15,r:.15,p:.5},{w:"square",v:4,t:5,d:.001,r:.001,g:1}],[{w:"n1",v:.3,a:1,s:1,d:.15,r:0,t:.5}],[{w:"sine",t:12.5,d:0,r:0,p:.5,v:.3,h:.2,q:.5},{g:1,w:"sine",v:1,t:2,d:0,r:0,s:1},{g:1,w:"n0",v:.2,t:2,a:.6,h:0,d:.1,r:.1,b:0,c:0}],[{w:"n0",v:.2,a:.05,h:.02,d:.02,r:.02}],[{w:"n0",v:.4,a:1,d:1,t:.25}],[{w:"sine",v:.3,a:.1,d:1,s:.5},{w:"sine",v:4,t:0,f:1.5,d:1,s:1,r:.1,g:1},{g:1,w:"sine",v:4,t:0,f:2,a:.6,h:0,d:.1,s:1,r:.1,b:0,c:0}],[{w:"square",v:.3,t:.25,d:11,s:1},{w:"square",v:12,t:0,f:8,d:1,s:1,r:11,g:1}],[{w:"n0",v:.4,t:.5,a:1,d:11,s:1,r:.5},{w:"square",v:1,t:0,f:14,d:1,s:1,r:11,g:1}],[{w:"sine",t:0,f:1221,a:.2,d:1,r:.25,s:1},{g:1,w:"n0",v:3,t:.5,d:1,s:1,r:1}],[{w:"sine",d:.4,r:.4,p:.1,t:2.5,v:1},{w:"n0",v:12,t:2,d:1,r:1,g:1}]],program0:[[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"triangle",v:.5,d:.7}],[{w:"sawtooth",v:.3,d:.7}],[{w:"sawtooth",v:.3,d:.7}],[{w:"sine",v:.5,d:.3,r:.3}],[{w:"triangle",v:.5,d:.3,r:.3}],[{w:"square",v:.2,d:.3,r:.3}],[{w:"square",v:.2,d:.3,r:.3}],[{w:"sine",v:.5,d:.1,r:.1}],[{w:"sine",v:.5,d:.1,r:.1}],[{w:"square",v:.2,d:1,r:1}],[{w:"sawtooth",v:.3,d:.7,r:.7}],[{w:"sine",v:.5,a:.01,s:1}],[{w:"sine",v:.7,d:.02,s:.7}],[{w:"square",v:.2,s:1}],[{w:"triangle",v:.5,a:.01,s:1}],[{w:"square",v:.2,a:.02,s:1}],[{w:"square",v:.2,a:.02,s:1}],[{w:"square",v:.2,a:.02,s:1}],[{w:"square",v:.2,a:.05,s:1}],[{w:"triangle",v:.5,d:.5}],[{w:"square",v:.2,d:.6}],[{w:"square",v:.2,d:.6}],[{w:"triangle",v:.8,d:.6}],[{w:"triangle",v:.4,d:.05}],[{w:"square",v:.2,d:1}],[{w:"square",v:.2,d:1}],[{w:"sine",v:.4,d:.6}],[{w:"triangle",v:.7,d:.4}],[{w:"triangle",v:.7,d:.7}],[{w:"triangle",v:.7,d:.7}],[{w:"triangle",v:.7,d:.7}],[{w:"square",v:.3,d:.2}],[{w:"square",v:.3,d:.2}],[{w:"square",v:.3,d:.1,s:.2}],[{w:"sawtooth",v:.4,d:.1,s:.2}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.3,d:.1}],[{w:"sawtooth",v:.3,d:.5,r:.5}],[{w:"triangle",v:.6,d:.1,r:.1,h:.03,p:.8}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"sawtooth",v:.2,a:.02,s:1}],[{w:"triangle",v:.3,a:.03,s:1}],[{w:"sine",v:.3,a:.03,s:1}],[{w:"triangle",v:.3,a:.05,s:1}],[{w:"sawtooth",v:.5,a:.01,d:.1}],[{w:"square",v:.3,a:.05,d:.2,s:.6}],[{w:"square",v:.3,a:.05,d:.2,s:.6}],[{w:"square",v:.3,a:.05,d:.2,s:.6}],[{w:"square",v:.2,a:.05,d:.01,s:1}],[{w:"square",v:.3,a:.05,s:1}],[{w:"square",v:.3,s:.7}],[{w:"square",v:.3,s:.7}],[{w:"square",v:.3,s:.7}],[{w:"square",v:.3,a:.02,d:2}],[{w:"square",v:.3,a:.02,d:2}],[{w:"square",v:.3,a:.03,d:2}],[{w:"square",v:.3,a:.04,d:2}],[{w:"square",v:.3,a:.02,d:2}],[{w:"square",v:.3,a:.05,d:2}],[{w:"square",v:.3,a:.03,d:2}],[{w:"square",v:.3,a:.03,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"sine",v:.7,a:.02,d:2}],[{w:"square",v:.3,s:.7}],[{w:"sawtooth",v:.4,s:.7}],[{w:"triangle",v:.5,s:.7}],[{w:"sawtooth",v:.4,s:.7}],[{w:"sawtooth",v:.4,d:12}],[{w:"sine",v:.4,a:.06,d:12}],[{w:"sawtooth",v:.4,d:12}],[{w:"sawtooth",v:.4,d:12}],[{w:"sawtooth",v:.3,d:12}],[{w:"triangle",v:.5,d:12}],[{w:"square",v:.3,d:12}],[{w:"triangle",v:.5,a:.08,d:11}],[{w:"sawtooth",v:.5,a:.05,d:11}],[{w:"sawtooth",v:.5,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"square",v:.3,d:11}],[{w:"sawtooth",v:.5,a:.04,d:11}],[{w:"sawtooth",v:.5,d:11}],[{w:"triangle",v:.5,a:.8,d:11}],[{w:"triangle",v:.5,d:11}],[{w:"square",v:.3,d:11}],[{w:"sawtooth",v:.3,d:1,r:1}],[{w:"sawtooth",v:.5,d:.3}],[{w:"sawtooth",v:.5,d:.3,r:.3}],[{w:"sawtooth",v:.5,d:.3,r:.3}],[{w:"square",v:.3,d:.2,r:.2}],[{w:"square",v:.3,a:.02,d:2}],[{w:"sawtooth",v:.2,a:.02,d:.7}],[{w:"triangle",v:.5,d:1}],[{w:"sawtooth",v:.3,d:.3,r:.3}],[{w:"sine",v:.8,d:.1,r:.1}],[{w:"square",v:.2,d:.1,r:.1,p:1.05}],[{w:"sine",v:.8,d:.05,r:.05}],[{w:"triangle",v:.5,d:.1,r:.1,p:.96}],[{w:"triangle",v:.5,d:.1,r:.1,p:.97}],[{w:"square",v:.3,d:.1,r:.1}],[{w:"n1",v:.3,a:1,s:1,d:.15,r:0,t:.5}],[{w:"triangle",v:.5,d:.03,t:0,f:1332,r:.001,p:1.1}],[{w:"n0",v:.2,t:.1,d:.02,a:.05,h:.02,r:.02}],[{w:"n0",v:.4,a:1,d:1,t:.25}],[{w:"sine",v:.3,a:.8,d:1,t:0,f:1832}],[{w:"triangle",d:.5,t:0,f:444,s:1}],[{w:"n0",v:.4,d:1,t:0,f:22,s:1}],[{w:"n0",v:.5,a:.2,d:11,t:0,f:44}],[{w:"n0",v:.5,t:.25,d:.4,r:.4}]],drummap1:[[{w:"triangle",t:0,f:70,v:1,d:.05,h:.03,p:.9,q:.1},{w:"n0",g:1,t:6,v:17,r:.01,h:0,p:0}],[{w:"triangle",t:0,f:88,v:1,d:.05,h:.03,p:.5,q:.1},{w:"n0",g:1,t:5,v:42,r:.01,h:0,p:0}],[{w:"n0",f:222,p:0,t:0,r:.01,h:0}],[{w:"triangle",v:.3,f:180,d:.05,t:0,h:.03,p:.9,q:.1},{w:"n0",v:.6,t:0,f:70,h:.02,r:.01,p:0},{g:1,w:"square",v:2,t:0,f:360,r:.01,b:0,c:0}],[{w:"square",f:1150,v:.34,t:0,r:.03,h:.025,d:.03},{g:1,w:"n0",t:0,f:13,h:.025,d:.1,s:1,r:.1,v:1}],[{w:"triangle",f:200,v:1,d:.06,t:0,r:.06},{w:"n0",g:1,t:0,f:400,v:12,r:.02,d:.02}],[{w:"triangle",f:100,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.4,h:.015,d:.005,r:.005}],[{w:"n1",f:390,v:.25,r:.01,t:0}],[{w:"triangle",f:120,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.5,h:.015,d:.005,r:.005}],[{w:"n1",v:.25,f:390,r:.03,t:0,h:.005,d:.03}],[{w:"triangle",f:140,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.3,h:.015,d:.005,r:.005}],[{w:"n1",v:.25,f:390,t:0,d:.2,r:.2},{w:"n0",v:.3,t:0,c:0,f:440,h:.005,d:.05}],[{w:"triangle",f:155,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.3,h:.015,d:.005,r:.005}],[{w:"triangle",f:180,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.3,h:.015,d:.005,r:.005}],[{w:"n1",v:.3,f:1200,d:.2,r:.2,h:.05,t:0},{w:"n1",t:0,v:1,d:.1,r:.1,p:1.2,f:440}],[{w:"triangle",f:220,v:.9,d:.12,h:.02,p:.5,t:0,r:.12},{g:1,w:"n0",v:5,t:.3,h:.015,d:.005,r:.005}],[{w:"n1",f:500,v:.15,d:.4,r:.4,h:0,t:0},{w:"n0",v:.1,t:0,r:.01,f:440}],[{w:"n1",v:.3,f:800,d:.2,r:.2,h:.05,t:0},{w:"square",t:0,v:1,d:.1,r:.1,p:.1,f:220,g:1}],[{w:"sine",f:1651,v:.15,d:.2,r:.2,h:0,t:0},{w:"sawtooth",g:1,t:1.21,v:7.2,d:.1,r:11,h:1},{g:1,w:"n0",v:3.1,t:.152,d:.002,r:.002}],null,[{w:"n1",v:.3,f:1200,d:.2,r:.2,h:.05,t:0},{w:"n1",t:0,v:1,d:.1,r:.1,p:1.2,f:440}],null,[{w:"n1",v:.3,f:555,d:.25,r:.25,h:.05,t:0},{w:"n1",t:0,v:1,d:.1,r:.1,f:440,a:.005,h:.02}],[{w:"sawtooth",f:776,v:.2,d:.3,t:0,r:.3},{g:1,w:"n0",v:2,t:0,f:776,a:.005,h:.02,d:.1,s:1,r:.1,c:0},{g:11,w:"sine",v:.1,t:0,f:22,d:.3,r:.3,b:0,c:0}],[{w:"n1",f:440,v:.15,d:.4,r:.4,h:0,t:0},{w:"n0",v:.4,t:0,r:.01,f:440}],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[{w:"sine",f:1720,v:.3,d:.02,t:0,r:.02},{w:"square",g:1,t:0,f:2876,v:6,d:.2,s:1,r:.2}],[{w:"sine",f:1720,v:.3,d:.25,t:0,r:.25},{w:"square",g:1,t:0,f:2876,v:6,d:.2,s:1,r:.2}]],drummap0:[[{w:"triangle",t:0,f:110,v:1,d:.05,h:.02,p:.1}],[{w:"triangle",t:0,f:150,v:.8,d:.1,p:.1,h:.02,r:.01}],[{w:"n0",f:392,v:.5,d:.01,p:0,t:0,r:.05}],[{w:"n0",f:33,d:.05,t:0}],[{w:"n0",f:100,v:.7,d:.03,t:0,r:.03,h:.02}],[{w:"n0",f:44,v:.7,d:.02,p:.1,t:0,h:.02}],[{w:"triangle",f:240,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:440,v:.2,r:.01,t:0}],[{w:"triangle",f:270,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:440,v:.2,d:.04,r:.04,t:0}],[{w:"triangle",f:300,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:440,v:.2,d:.1,r:.1,h:.02,t:0}],[{w:"triangle",f:320,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"triangle",f:360,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:150,v:.2,d:.1,r:.1,h:.05,t:0,p:.1}],[{w:"triangle",f:400,v:.9,d:.1,h:.02,p:.1,t:0}],[{w:"n0",f:150,v:.2,d:.1,r:.01,h:.05,t:0,p:.1}],[{w:"n0",f:150,v:.2,d:.1,r:.01,h:.05,t:0,p:.1}],[{w:"n0",f:440,v:.3,d:.1,p:.9,t:0,r:.1}],[{w:"n0",f:200,v:.2,d:.05,p:.9,t:0}],[{w:"n0",f:440,v:.3,d:.12,p:.9,t:0}],[{w:"sine",f:800,v:.4,d:.06,t:0}],[{w:"n0",f:150,v:.2,d:.1,r:.01,h:.05,t:0,p:.1}],[{w:"n0",f:33,v:.3,d:.2,p:.9,t:0}],[{w:"n0",f:300,v:.3,d:.14,p:.9,t:0}],[{w:"sine",f:200,d:.06,t:0}],[{w:"sine",f:150,d:.06,t:0}],[{w:"sine",f:300,t:0}],[{w:"sine",f:300,d:.06,t:0}],[{w:"sine",f:250,d:.06,t:0}],[{w:"square",f:300,v:.3,d:.06,p:.8,t:0}],[{w:"square",f:260,v:.3,d:.06,p:.8,t:0}],[{w:"sine",f:850,v:.5,d:.07,t:0}],[{w:"sine",f:790,v:.5,d:.07,t:0}],[{w:"n0",f:440,v:.3,a:.05,t:0}],[{w:"n0",f:440,v:.3,a:.05,t:0}],[{w:"triangle",f:1800,v:.4,p:.9,t:0,h:.03}],[{w:"triangle",f:1800,v:.3,p:.9,t:0,h:.13}],[{w:"n0",f:330,v:.3,a:.02,t:0,r:.01}],[{w:"n0",f:330,v:.3,a:.02,t:0,h:.04,r:.01}],[{w:"n0",f:440,v:.3,t:0}],[{w:"sine",f:800,t:0}],[{w:"sine",f:700,t:0}],[{w:"n0",f:330,v:.3,t:0}],[{w:"n0",f:330,v:.3,t:0,h:.1,r:.01,p:.7}],[{w:"sine",t:0,f:1200,v:.3,r:.01}],[{w:"sine",t:0,f:1200,v:.3,d:.2,r:.2}]],ready:function(){this.pg=[],this.vol=[],this.ex=[],this.bend=[],this.rpnidx=[],this.brange=[],this.sustain=[],this.notetab=[],this.rhythm=[],this.maxTick=0,this.playTick=0,this.playing=0,this.releaseRatio=3.5;for(var t=0;t<16;++t)this.pg[t]=0,this.vol[t]=3e4/16129,this.bend[t]=0,this.brange[t]=256,this.rhythm[t]=0;this.rhythm[9]=1,this.preroll=.2,this.relcnt=0,setInterval(function(){if(3<=++this.relcnt){this.relcnt=0;for(var t=this.notetab.length-1;0<=t;--t){var s=this.notetab[t];this.actx.currentTime>s.e&&(this._pruneNote(s),this.notetab.splice(t,1))}}if(this.playing&&0<this.song.ev.length)for(var e=this.song.ev[this.playIndex];this.actx.currentTime+this.preroll>this.playTime;)if(65361==e.m[0]?(this.song.tempo=e.m[1],this.tick2Time=240/this.song.tempo/this.song.timebase):this.send(e.m,this.playTime),++this.playIndex,this.playIndex>=this.song.ev.length){if(!this.loop){this.playTick=this.maxTick,this.playing=0;break}e=this.song.ev[this.playIndex=0],this.playTick=e.t}else e=this.song.ev[this.playIndex],this.playTime+=(e.t-this.playTick)*this.tick2Time,this.playTick=e.t}.bind(this),60),this.isReady=1},setMasterVol:function(t){null!=t&&(this.masterVol=t),this.out&&(this.out.gain.value=this.masterVol)},setReverbLev:function(t){null!=t&&(this.reverbLev=t);var s=parseFloat(this.reverbLev);this.rev&&!isNaN(s)&&(this.rev.gain.value=8*s)},setLoop:function(t){this.loop=t},setVoices:function(t){this.voices=t},reset:function(){for(var t=0;t<16;++t)this.setProgram(t,0),this.setBendRange(t,256),this.setModulation(t,0),this.setChVol(t,100),this.setPan(t,64),this.resetAllControllers(t),this.allSoundOff(t),this.rhythm[t]=0;this.rhythm[9]=1},setQuality:function(t){var s;for(null!=t&&(this.quality=t),s=0;s<128;++s)this.setTimbre(0,s,this.program0[s]);for(s=0;s<this.drummap0.length;++s)this.setTimbre(1,s+35,this.drummap0[s]);if(this.quality){for(s=0;s<this.program1.length;++s)this.setTimbre(0,s,this.program1[s]);for(s=0;s<this.drummap.length;++s)this.drummap1[s]&&this.setTimbre(1,s+35,this.drummap1[s])}},setTimbre:function(t,s,e){var a={g:0,w:"sine",t:1,f:0,v:.5,a:0,h:.01,d:.01,s:0,r:.05,p:1,q:1,k:0};function i(t){for(s=0;s<t.length;++s)for(n in a)t[s].hasOwnProperty(n)&&void 0!==t[s][n]||(t[s][n]=a[n]);return t}t&&35<=s&&s<=81&&(this.drummap[s-35]=i(e)),0==t&&0<=s&&s<=127&&(this.program[s]=i(e))},_pruneNote:function(t){for(var s=t.o.length-1;0<=s;--s){if(t.o[s].frequency?t.o[s].frequency.cancelScheduledValues(0):t.o[s].playbackRate.cancelScheduledValues(0),t.g[s].gain.cancelScheduledValues(0),t.o[s].stop(),t.o[s].detune)try{this.chmod[t.ch].disconnect(t.o[s].detune)}catch(t){}t.g[s].gain.value=0}},_limitVoices:function(t,s){this.notetab.sort(function(t,s){return t.f!=s.f?t.f-s.f:t.e!=s.e?s.e-t.e:s.t-t.t});for(var e=this.notetab.length-1;0<=e;--e){var a=this.notetab[e];(this.actx.currentTime>a.e||e>=this.voices-1)&&(this._pruneNote(a),this.notetab.splice(e,1))}},_note:function(t,s,e,a,i){var n,r,v,w=[],d=[],h=[],o=[],u=[],l=440*Math.pow(2,(e-69)/12);this._limitVoices(s,e);for(var g=0;g<i.length;++g){var f=t+(v=i[g]).a+v.h;switch(0==v.g?(n=this.chvol[s],r=a*a/16384,o[g]=l*v.t+v.f):10<v.g?(n=d[v.g-11].gain,r=1,o[g]=o[v.g-11]*v.t+v.f):(r=w[v.g-1].frequency?(n=w[v.g-1].frequency,o[v.g-1]):(n=w[v.g-1].playbackRate,o[v.g-1]/440),o[g]=o[v.g-1]*v.t+v.f),v.w[0]){case"n":w[g]=this.actx.createBufferSource(),w[g].buffer=this.noiseBuf[v.w],w[g].loop=!0,w[g].playbackRate.value=o[g]/440,1!=v.p&&this._setParamTarget(w[g].playbackRate,o[g]/440*v.p,t,v.q),w[g].detune&&(this.chmod[s].connect(w[g].detune),w[g].detune.value=this.bend[s]);break;default:w[g]=this.actx.createOscillator(),w[g].frequency.value=o[g],1!=v.p&&this._setParamTarget(w[g].frequency,o[g]*v.p,t,v.q),"w"==v.w[0]?w[g].setPeriodicWave(this.wave[v.w]):w[g].type=v.w,w[g].detune&&(this.chmod[s].connect(w[g].detune),w[g].detune.value=this.bend[s])}d[g]=this.actx.createGain(),u[g]=v.r,w[g].connect(d[g]),d[g].connect(n),h[g]=r*v.v,v.k&&(h[g]*=Math.pow(2,(e-60)/12*v.k)),v.a?(d[g].gain.value=0,d[g].gain.setValueAtTime(0,t),d[g].gain.linearRampToValueAtTime(h[g],t+v.a)):d[g].gain.setValueAtTime(h[g],t),this._setParamTarget(d[g].gain,v.s*h[g],f,v.d),w[g].start(t),this.rhythm[s]&&(w[g].onended=function(t,s){return function(){s&&t.disconnect(s)}}(this.chmod[s],w[g].detune),w[g].stop(t+i[0].d*this.releaseRatio))}this.rhythm[s]||this.notetab.push({t:t,e:99999,ch:s,n:e,o:w,g:d,t2:t+v.a,v:h,r:u,f:0})},_setParamTarget:function(t,s,e,a){0!=a?t.setTargetAtTime(s,e,a):t.setValueAtTime(s,e)},_releaseNote:function(t,s){if(9!=t.ch)for(var e=t.g.length-1;0<=e;--e)t.g[e].gain.cancelScheduledValues(s),s==t.t2?t.g[e].gain.setValueAtTime(t.v[e],s):s<t.t2&&t.g[e].gain.setValueAtTime(t.v[e]*(s-t.t)/(t.t2-t.t),s),this._setParamTarget(t.g[e].gain,0,s,t.r[e]);t.e=s+t.r[0]*this.releaseRatio,t.f=1},setModulation:function(t,s,e){this.chmod[t].gain.setValueAtTime(100*s/127,this._tsConv(e))},setChVol:function(t,s,e){this.vol[t]=3*s*s/16129,this.chvol[t].gain.setValueAtTime(this.vol[t]*this.ex[t],this._tsConv(e))},setPan:function(t,s,e){this.chpan[t]&&this.chpan[t].pan.setValueAtTime((s-64)/64,this._tsConv(e))},setExpression:function(t,s,e){this.ex[t]=s*s/16129,this.chvol[t].gain.setValueAtTime(this.vol[t]*this.ex[t],this._tsConv(e))},setSustain:function(t,s,e){if(this.sustain[t]=s,e=this._tsConv(e),s<64)for(var a=this.notetab.length-1;0<=a;--a){var i=this.notetab[a];e>=i.t&&i.ch==t&&1==i.f&&this._releaseNote(i,e)}},allSoundOff:function(t){for(var s=this.notetab.length-1;0<=s;--s){var e=this.notetab[s];e.ch==t&&(this._pruneNote(e),this.notetab.splice(s,1))}},resetAllControllers:function(t){this.bend[t]=0,this.ex[t]=1,this.rpnidx[t]=16383,this.sustain[t]=0,this.chvol[t]&&(this.chvol[t].gain.value=this.vol[t]*this.ex[t],this.chmod[t].gain.value=0)},setBendRange:function(t,s){this.brange[t]=s},setProgram:function(t,s){this.debug&&console.log("Pg("+t+")="+s),this.pg[t]=s},setBend:function(t,s,e){e=this._tsConv(e);var a=100*this.brange[t]/127;this.bend[t]=(s-8192)*a/8192;for(var i=this.notetab.length-1;0<=i;--i){var n=this.notetab[i];if(n.ch==t)for(var r=n.o.length-1;0<=r;--r)n.o[r].frequency&&n.o[r].detune&&n.o[r].detune.setValueAtTime(this.bend[t],e)}},noteOn:function(t,s,e,a){0!=e?(a=this._tsConv(a),this.rhythm[t]?35<=s&&s<=81&&this._note(a,t,s,e,this.drummap[s-35]):this._note(a,t,s,e,this.program[this.pg[t]])):this.noteOff(t,s,a)},noteOff:function(t,s,e){if(!this.rhythm[t]){e=this._tsConv(e);for(var a=this.notetab.length-1;0<=a;--a){var i=this.notetab[a];e>=i.t&&i.ch==t&&i.n==s&&0==i.f&&(i.f=1,this.sustain[t]<64&&this._releaseNote(i,e))}}},_tsConv:function(t){return null==t||t<=0?(t=0,this.actx&&(t=this.actx.currentTime)):this.tsmode&&(t=.001*t-this.tsdiff),t},setTsMode:function(t){this.tsmode=t},send:function(t,s){var e=15&t[0],a=-16&t[0];if(!(a<128||256<=a))switch("suspended"==this.audioContext.state&&this.audioContext.resume(),a){case 176:switch(t[1]){case 1:this.setModulation(e,t[2],s);break;case 7:this.setChVol(e,t[2],s);break;case 10:this.setPan(e,t[2],s);break;case 11:this.setExpression(e,t[2],s);break;case 64:this.setSustain(e,t[2],s);break;case 98:case 98:this.rpnidx[e]=16383;break;case 100:this.rpnidx[e]=16256&this.rpnidx[e]|t[2];break;case 101:this.rpnidx[e]=127&this.rpnidx[e]|t[2]<<7;break;case 6:0==this.rpnidx[e]&&(this.brange[e]=(t[2]<<7)+(127&this.brange[e]));break;case 38:0==this.rpnidx[e]&&(this.brange[e]=16256&this.brange[e]|t[2]);break;case 120:case 123:case 124:case 125:case 126:case 127:this.allSoundOff(e);break;case 121:this.resetAllControllers(e)}break;case 192:this.setProgram(e,t[1]);break;case 224:this.setBend(e,t[1]+(t[2]<<7),s);break;case 144:this.noteOn(e,t[1],t[2],s);break;case 128:this.noteOff(e,t[1],s);break;case 240:if(255==t[0]){this.reset();break}if(254!=t[0]&&this.debug)for(var i=[],n=0;n<t.length;++n)i.push(t[n].toString(16));65==t[1]&&16==t[2]&&66==t[3]&&18==t[4]&&64==t[5]&&16==(240&t[6])&&21==t[7]&&(e=[9,0,1,2,3,4,5,6,7,8,10,11,12,13,14,15][15&t[6]],this.rhythm[e]=t[8])}},_createWave:function(t){for(var s=new Float32Array(t.length),e=new Float32Array(t.length),a=1;a<t.length;++a)s[a]=t[a];return this.actx.createPeriodicWave(e,s)},getAudioContext:function(){return this.actx},setAudioContext:function(t,s){this.audioContext=this.actx=t,(this.dest=s)||(this.dest=t.destination),this.tsdiff=.001*performance.now()-this.actx.currentTime,this.out=this.actx.createGain(),this.comp=this.actx.createDynamicsCompressor();var e=.5*this.actx.sampleRate|0;this.convBuf=this.actx.createBuffer(2,e,this.actx.sampleRate),this.noiseBuf={},this.noiseBuf.n0=this.actx.createBuffer(1,e,this.actx.sampleRate),this.noiseBuf.n1=this.actx.createBuffer(1,e,this.actx.sampleRate);for(var a=this.convBuf.getChannelData(0),i=this.convBuf.getChannelData(1),n=this.noiseBuf.n0.getChannelData(0),r=this.noiseBuf.n1.getChannelData(0),v=0;v<e;++v)v/e<Math.random()&&(a[v]=Math.exp(-3*v/e)*(Math.random()-.5)*.5,i[v]=Math.exp(-3*v/e)*(Math.random()-.5)*.5),n[v]=2*Math.random()-1;for(var w=0;w<64;++w)for(var d=10*Math.random()+1,h=10*Math.random()+1,v=0;v<e;++v){var o=Math.sin(v/e*2*Math.PI*440*d)*Math.sin(v/e*2*Math.PI*440*h);r[v]+=o/8}for(this.useReverb&&(this.conv=this.actx.createConvolver(),this.conv.buffer=this.convBuf,this.rev=this.actx.createGain(),this.rev.gain.value=this.reverbLev,this.out.connect(this.conv),this.conv.connect(this.rev),this.rev.connect(this.comp)),this.setMasterVol(),this.out.connect(this.comp),this.comp.connect(this.dest),this.chvol=[],this.chmod=[],this.chpan=[],this.wave={w9999:this._createWave("w9999")},this.lfo=this.actx.createOscillator(),this.lfo.frequency.value=5,this.lfo.start(0),v=0;v<16;++v)this.chvol[v]=this.actx.createGain(),this.actx.createStereoPanner?(this.chpan[v]=this.actx.createStereoPanner(),this.chvol[v].connect(this.chpan[v]),this.chpan[v].connect(this.out)):(this.chpan[v]=null,this.chvol[v].connect(this.out)),this.chmod[v]=this.actx.createGain(),this.lfo.connect(this.chmod[v]),this.pg[v]=0,this.resetAllControllers(v);this.setReverbLev(),this.reset()}},this.sy.properties)this[n]=this.sy.properties[n].value;this.setQuality(1),t&&(null!=t.useReverb&&(this.useReverb=t.useReverb),null!=t.quality&&this.setQuality(t.quality),null!=t.voices&&this.setVoices(t.voices)),this.ready()}s&&(s.synth||(s.synth={}),s.synth.Tiny||(e="1.2.1",a=s.lib.getAudioContext(),i={},n=[],r={_info:function(t){return{type:"Web Audo",name:t=t||"JZZ.synth.Tiny",manufacturer:"virtual",version:e}},_openOut:function(t,s){var e;a?(void 0!==s?(i[s=""+s]||(i[s]=new v),e=i[s]):(e=new v,n.push(e)),e.setAudioContext(a),t.plug=function(t){t&&(t.context instanceof AudioContext||t.context instanceof webkitAudioContext)&&e.setAudioContext(t.context,t)},t._info=r._info(s),t._receive=function(t){e.send(t)},t._resume()):t._crash("AudioContext not supported")}},s.synth.Tiny=function(t){return s.lib.openMidiOut(t,r)},s.synth.Tiny.register=function(t){return!!a&&s.lib.registerMidiOut(t,r)},s.synth.Tiny.version=function(){return e}))});