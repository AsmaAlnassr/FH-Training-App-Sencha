app.views.Viewport = Ext.extend(Ext.TabPanel, {
  fullscreen: true,
  ui: 'light',

  tabBar: {
    dock: 'bottom',
    layout: {
      pack: 'center'
    },
    hidden: true
  },  
  cardSwitchAnimation: {
    type: 'slide',
    cover: true
  },

  initComponent: function() {
      //put instances of cards into app.views namespace
      Ext.apply(app.views, {
        home: new app.views.Home(),
        map: new app.views.MapView(),
        twitter: new app.views.Twitter(),
        camera: new app.views.Camera(),
        video: new app.views.Video()
      });

      //put instances of cards into viewport
      Ext.apply(this, {
        items: [
          app.views.home,
          app.views.video,
          app.views.twitter,
          app.views.map,
          {
            title: '???',
            iconCls: 'home',
            
            listeners: {
              show: function() {
                
              }
            }
          },
        ]
      });
      app.views.Viewport.superclass.initComponent.apply(this, arguments);
  },
  layoutOrientation : function(orientation, w, h) {
    app.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
  }
});
