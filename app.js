
Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		width:500,
		height:500,
		title:'form field',
		renderTo:Ext.getBody(),
		items:[{
			xtype:'textfield',
			allowBlank:false,
			emptyText:'input text'
		},{
			xtype:'textfield',
			inputType:'password',
			allowBlank:false,
			emptyText:'input password'
		},{
			xtype:'datefield',
			format:'y-m-d'
		},{
			xtype:'numberfield',
			minValue: -1,
			maxValue:10
		},{
			xtype:'filefield',
			buttonOnly:true
		},{
			xtype:'checkboxfield',
			boxLabel:'아이디 기억'
		},{
			xtype:'radiofield',
			name:'sex',
			boxLabel:'남'
		},{
			xtype:'radiofield',
			name:'sex',
			boxLabel:'여'
		},{
			xtype:'slider',
			width:100,
			value:50
		}]
	})
})