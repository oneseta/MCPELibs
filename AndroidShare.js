ClipData=android.content.ClipData;
ClipDescription=android.content.ClipDescription;

getAct=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

AndroidShare={
	clipBoard:function(t){
		var item=new ClipData.Item(t);
		var mimeType=[];
		mimeType[0]=ClipDescription.MIMETYPE_TEXT_PLAIN;
		var cd=new ClipData(new ClipDescription("text_data", mimeType),item);
		print("クリップボードにコピーしました");
		var cm=getAct.getSystemService(CLIPBOARD_SERVICE);
		cm.setPrimaryClip(cd);
	}
};