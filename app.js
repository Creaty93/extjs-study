Ext.onReady(function(){
	Ext.create('Ext.container.Viewport',{
		renderTo:Ext.getBody(),
		layout:'border',
		border:true,
		items:[{
			xtype:'panel',
			title:"Sonmingyu ExtJS",
			region:'north',
			border:true,
			padding:'0 0 10 0',
			items:[{
				xtype:'label',
				text:'made by ExtJS',
			}]
		},{
			xtype:'panel',
			title:'Menu',
			width:200,
			region:'west',
			split:true,
			border:true,
			collapses:true,
			collapsible:true,
			titleCollapse:true,
			items:[{
				xtype:'treepanel',
				listeners:[{
					itemclick:function( obj, record, item, index, e, eOpts){
						let movePageName = '';
						
						switch(index){
							case 1:
								movePageName = 'introduce';
								break;
							case 3:
								movePageName = 'inputfieldsample';
								break;
							case 4:
								movePageName = 'gridsample';
								break;
							case 5:
								movePageName = 'ajaxsample';
								break;
							case 6:
								movePageName = 'windowsample';
								break;
						}
						
						if(movePageName.length > 0){
							var page = obj.up('viewport').down('component[region=center]');
								page.removeAll(true);
								page.add({
									xtype: movePageName
								});
						}
						
					}
				}],
				root:{
					text:'Portfolio',
					expanded:true,
					children:[{
						text:"Introeduce",
						leaf:true
					},{
						text:"ExtJs Sample",
						expanded:true,
						children:[{
							text:'InputField',
							leaf:true
						},{
							text:'Grid',
							leaf:true,
						},{
							text:'Ajax',
							leaf:true
						},{
							text:'Window',
							leaf:true
						}]
					}]
				}
			}]
		},{
			xtype:'panel',
			region:'center',
			border:true,
			scrollable:true,
    		autoScroll:true,
    		items:[{
				xtype:'introduce'
			}]
		}]
	})
})