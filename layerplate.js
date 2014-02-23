//This is an old actioscript project that I need to DRY.
//I could seemingly make the click_node a sigular function that just processesthe variables.

/* Example of function to implement

function addComVal(valChanged, valNum){

	if(valChanged.value!=""){
		 hidCurCourse = 'hidTF_' + Number(valNum);
		 hidCurCourse = document.fMain[hidCurCourse];         
		 hidCurCourse.value = "Y";                           
	
	}else{
		 hidCurCourse = 'hidTF_' + Number(valNum);
		 hidCurCourse = document.fMain[hidCurCourse];             
		 hidCurCourse.value = "N";
	}

}

I’m sending the current field (this) and whatever the current row is:
addComVal(this,5)
*/
 



//NODE 01
node01.addEventListener(MouseEvent.CLICK, click_node01);
content01.visible=false;
bhlght01.visible=false;
node01.btnState_node01 = "off";
node01.gotoAndStop("off");
bhlght01.btnState_bhlght01="off";
bhlght01.gotoAndStop("off");


function click_node01(event:MouseEvent){
	if(node01.btnState_node01 == "off"){
		node01.btnState_node01 = "on";
		node01.gotoAndStop("on");
		bhlght01.visible=true;
		content01.visible=true;
		highlightOn(layer);
	}else if(node01.btnState_node01 == "on"){
		node01.btnState_node01 = "off";
		node01.gotoAndStop("off");
		bhlght01.visible=false;
		content01.visible=false;
		highlightOff(layer);
		
	}
};
bhlght01.addEventListener(MouseEvent.CLICK, click_bhlght01);
var color_content01:ColorTransform = content01.transform.colorTransform;
function click_bhlght01(event:MouseEvent){

		highlightOn(1);

};


//NODE 02
node02.addEventListener(MouseEvent.CLICK, click_node02);
content02.visible=false;
bhlght02.visible=false;
node02.btnState_node02 = "off";
node02.gotoAndStop("off");
bhlght02.btnState_bhlght02="off";
bhlght02.gotoAndStop("off");


function click_node02(event:MouseEvent){
	if(node02.btnState_node02 == "off"){
		node02.btnState_node02 = "on";
		node02.gotoAndStop("on");
		bhlght02.visible=true;
		content02.visible=true;
		highlightOn(layer);
	}else if(node02.btnState_node02 == "on"){
		node02.btnState_node02 = "off";
		node02.gotoAndStop("off");
		bhlght02.visible=false;
		content02.visible=false;
		highlightOff(layer);
		
	}
};
bhlght02.addEventListener(MouseEvent.CLICK, click_bhlght02);
var color_content02:ColorTransform = content02.transform.colorTransform;
function click_bhlght02(event:MouseEvent){
	
		highlightOn(2);

};


//NODE 03
node03.addEventListener(MouseEvent.CLICK, click_node03);
content03.visible=false;
bhlght03.visible=false;
node03.btnState_node03 = "off";
node03.gotoAndStop("off");
bhlght03.btnState_bhlght03="off";
bhlght03.gotoAndStop("off");


function click_node03(event:MouseEvent){
	if(node03.btnState_node03 == "off"){
		node03.btnState_node03 = "on";
		node03.gotoAndStop("on");
		bhlght03.visible=true;
		content03.visible=true;
		highlightOn(layer);
	}else if(node03.btnState_node03 == "on"){
		node03.btnState_node03 = "off";
		node03.gotoAndStop("off");
		bhlght03.visible=false;
		content03.visible=false;
		highlightOff(layer);
		
	}
};
bhlght03.addEventListener(MouseEvent.CLICK, click_bhlght03);
var color_content03:ColorTransform = content03.transform.colorTransform;
function click_bhlght03(event:MouseEvent){

		highlightOn(3);

};


//NODE 04
node04.addEventListener(MouseEvent.CLICK, click_node04);
content04.visible=false;
bhlght04.visible=false;
node04.btnState_node04 = "off";
node04.gotoAndStop("off");
bhlght04.btnState_bhlght04="off";
bhlght04.gotoAndStop("off");

function click_node04(event:MouseEvent){
	if(node04.btnState_node04 == "off"){
		node04.btnState_node04 = "on";
		node04.gotoAndStop("on");
		bhlght04.visible=true;
		content04.visible=true;
		highlightOn(layer);
	}else if(node04.btnState_node04 == "on"){
		node04.btnState_node04 = "off";
		node04.gotoAndStop("off");
		bhlght04.visible=false;
		content04.visible=false;
		highlightOff(layer);
	}
};
bhlght04.addEventListener(MouseEvent.CLICK, click_bhlght04);
var color_content04:ColorTransform = content04.transform.colorTransform;
function click_bhlght04(event:MouseEvent){

		highlightOn(4);

};


//NODE 05
node05.addEventListener(MouseEvent.CLICK, click_node05);
content05.visible=false;
bhlght05.visible=false;
node05.btnState_node05 = "off";
node05.gotoAndStop("off");
bhlght05.btnState_bhlght05="off";
bhlght05.gotoAndStop("off");


function click_node05(event:MouseEvent){
	if(node05.btnState_node05 == "off"){
		node05.btnState_node05 = "on";
		node05.gotoAndStop("on");
		bhlght05.visible=true;
		content05.visible=true;
		highlightOn(layer);
	}else if(node05.btnState_node05 == "on"){
		node05.btnState_node05 = "off";
		node05.gotoAndStop("off");
		bhlght05.visible=false;
		content05.visible=false;
		highlightOff(layer);
		
	}
};
bhlght05.addEventListener(MouseEvent.CLICK, click_bhlght05);
var color_content05:ColorTransform = content05.transform.colorTransform;
function click_bhlght05(event:MouseEvent){

		highlightOn(5);

};


function highOn (h:Number):void{
	if(h==1){
		bhlght01.btnState_bhlght1="on";
		bhlght01.gotoAndStop("on");
		color_content01.color = 0xff0000;
		content01.transform.colorTransform = color_content01;
		btxtbx01.gotoAndPlay("in");
		
		
		
		content01.alpha=1;

	}else if(h==2){
		bhlght02.btnState_bhlght2="on";
		bhlght02.gotoAndStop("on");
		color_content02.color = 0xff0000;
		content02.transform.colorTransform = color_content02;
		btxtbx02.gotoAndPlay("in");
		
		content02.alpha=1;

	}else if(h==3){
		bhlght03.btnState_bhlght3="on";
		bhlght03.gotoAndStop("on");
		color_content03.color = 0xff0000;
		content03.transform.colorTransform = color_content03;
		btxtbx03.gotoAndPlay("in");
		
		content03.alpha=1;

	}else if(h==4){
		bhlght04.btnState_bhlght4="on";
		bhlght04.gotoAndStop("on");
		color_content04.color = 0xff0000;
		content04.transform.colorTransform = color_content04;
		btxtbx04.gotoAndPlay("in");
		
		content04.alpha=1;

	}else if(h==5){
		bhlght05.btnState_bhlght5="on";
		bhlght05.gotoAndStop("on");
		color_content05.color = 0xff0000;
		content05.transform.colorTransform = color_content05;
		btxtbx05.gotoAndPlay("in");
		
		content05.alpha=1;
	}
		
};
function highOff (h:Number):void{
	if(h==1){
		bhlght01.btnState_bhlght01="off";
		bhlght01.gotoAndStop("off");
		color_content01.color = 0x000000;
		content01.transform.colorTransform = color_content01;
		btxtbx01.gotoAndStop("off");
		
		content01.alpha=.2;
		
	}else if(h==2){
		bhlght02.btnState_bhlght02="off";
		bhlght02.gotoAndStop("off");
		color_content02.color = 0x000000;
		content02.transform.colorTransform = color_content02;
		btxtbx02.gotoAndStop("off");
		
		content02.alpha=.2;

	}else if(h==3){
		bhlght03.btnState_bhlght03="off";
		bhlght03.gotoAndStop("off");
		color_content03.color = 0x000000;
		content03.transform.colorTransform = color_content03;
		btxtbx03.gotoAndStop("off");
		
		content03.alpha=.2;
		
	}else if(h==4){
		bhlght04.btnState_bhlght04="off";
		bhlght04.gotoAndStop("off");
		color_content04.color = 0x000000;
		content04.transform.colorTransform = color_content04;
		btxtbx04.gotoAndStop("off");
		
		content04.alpha=.2;
		
	}else if(h==5){
		bhlght05.btnState_bhlght05="off";
		bhlght05.gotoAndStop("off");
		color_content05.color = 0x000000;
		content05.transform.colorTransform = color_content05;
		btxtbx05.gotoAndStop("off");
		
		content05.alpha=.2;
		
	}
};
	

function highlightOn (layer:Number):void{
	if (layer==1) {
		//TURN ON 01
		highOn(1);
		highOff(2);
		highOff(3);
		highOff(4);
		highOff(5);
	}else if (layer==2) {
		//TURN ON 02
		highOff(1);
		highOn(2);
		highOff(3);
		highOff(4);
		highOff(5);
	}else if (layer==3) {
		//TURN ON 03
		highOff(1);
		highOff(2);
		highOn(3);
		highOff(4);
		highOff(5);
	}else if (layer==4) {
		//TURN ON 04
		highOff(1);
		highOff(2);
		highOff(3);
		highOn(4);
		highOff(5);
	}else if (layer==5) {
		//TURN ON 05
		highOff(1);
		highOff(2);
		highOff(3);
		highOff(4);
		highOn(5);
	}
};


function highlightOff (layer:Number):void{
	if(layer==0){
		//TURN OFF 01
		bhlght01.btnState_bhlght01="off";
		bhlght01.gotoAndStop("off");
		color_content01.color = 0x000000;
		content01.transform.colorTransform = color_content01;
		btxtbx01.gotoAndStop("off");
		content01.alpha=1;
		//TURN OFF 02
		bhlght02.btnState_bhlght02="off";
		bhlght02.gotoAndStop("off");
		color_content02.color = 0x000000;
		content02.transform.colorTransform = color_content02;
		btxtbx02.gotoAndStop("off");
		content02.alpha=1;
		//TURN OFF 03
		bhlght03.btnState_bhlght03="off";
		bhlght03.gotoAndStop("off");
		color_content03.color = 0x000000;
		content03.transform.colorTransform = color_content03;
		btxtbx03.gotoAndStop("off");
		content03.alpha=1;	
		//TURN OFF 04
		bhlght04.btnState_bhlght04="off";
		bhlght04.gotoAndStop("off");
		color_content04.color = 0x000000;
		content04.transform.colorTransform = color_content04;
		btxtbx04.gotoAndStop("off");
		content04.alpha=1;
		//TURN OFF 05
		bhlght05.btnState_bhlght05="off";
		bhlght05.gotoAndStop("off");
		color_content05.color = 0x000000;
		content05.transform.colorTransform = color_content05;
		btxtbx05.gotoAndStop("off");
		content05.alpha=1;	
	}else if(layer==1){
		//TURN OFF 01 ONLY
		bhlght01.btnState_bhlght01="off";
		bhlght01.gotoAndStop("off");
		color_content01.color = 0x000000;
		content01.transform.colorTransform = color_content01;
		btxtbx01.gotoAndStop("off");
					
		content02.alpha=1;
		content03.alpha=1;
		content04.alpha=1;
		content05.alpha=1;
		
	}else if(layer==2){
		//TURN OFF 02 ONLY
		bhlght02.btnState_bhlght04="off";
		bhlght02.gotoAndStop("off");
		color_content02.color = 0x000000;
		content02.transform.colorTransform = color_content02;
		btxtbx04.gotoAndStop("off");
		
		content01.alpha=1;
		content03.alpha=1;
		content04.alpha=1;
		content05.alpha=1;
		
	}else if(layer==3){
		//TURN OFF 03 ONLY
		bhlght03.btnState_bhlght04="off";
		bhlght03.gotoAndStop("off");
		color_content03.color = 0x000000;
		content03.transform.colorTransform = color_content03;
		btxtbx03.gotoAndStop("off");
		
		content01.alpha=1;
		content02.alpha=1;
		content04.alpha=1;
		content05.alpha=1;
				
	}else if(layer==4){
		//TURN OFF 04 ONLY
		bhlght04.btnState_bhlght04="off";
		bhlght04.gotoAndStop("off");
		color_content04.color = 0x000000;
		content04.transform.colorTransform = color_content03;
		btxtbx04.gotoAndStop("off");
		
		content01.alpha=1;
		content02.alpha=1;
		content03.alpha=1;
		content05.alpha=1;
		
	}else if(layer==5){
		//TURN OFF 05 ONLY
		bhlght05.btnState_bhlght05="off";
		bhlght05.gotoAndStop("off");
		color_content05.color = 0x000000;
		content05.transform.colorTransform = color_content05;
		btxtbx05.gotoAndStop("off");
		
		content01.alpha=1;
		content02.alpha=1;
		content03.alpha=1;
		content04.alpha=1;		
	}
};
