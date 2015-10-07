var ClipData=android.content.ClipData;
var ClipDescription=android.content.ClipDescription;

AndroidShare={
	clipBoard:function(t){
		var item=new ClipData.Item(t);
		var mimeType=new java.lang.String[1];
		mimeType[0]=ClipDescription.MIMETYPE_TEXT_PLAIN;
		var cd=new ClipData(new ClipDescription("text_data", mimeType),item);
		print("クリップボードにコピーしました");
	}
};