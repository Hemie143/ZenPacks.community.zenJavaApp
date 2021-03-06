
(function(){
    var ZC = Ext.ns('Zenoss.component');

    function render_link(ob) {
        if (ob && ob.uid) {
            return Zenoss.render.link(ob.uid);
        } else {
            return ob;
        }
    }
    
    function pass_link(ob){ 
        return ob; 
    }
    
    ZC.JavaAppPanel = Ext.extend(ZC.ComponentGridPanel, {
        constructor: function(config) {
            config = Ext.applyIf(config||{}, {
                componentType: 'JavaApp',
                autoExpandColumn: 'name', 
                fields:                 [
                    {
                        "name": "uid"
                    }, 
                    {
                        "name": "severity"
                    }, 
                    {
                        "name": "status"
                    }, 
                    {
                        "name": "name"
                    }, 
                    {
                        "name": "getIpserviceLink"
                    }, 
                    {
                        "name": "getOsprocessLink"
                    }, 
                    {
                        "name": "javaversion"
                    }, 
                    {
                        "name": "vendorproduct"
                    }, 
                    {
                        "name": "usesMonitorAttribute"
                    }, 
                    {
                        "name": "monitor"
                    }, 
                    {
                        "name": "monitored"
                    }, 
                    {
                        "name": "locking"
                    }
                ]
,
                columns:                [
                    {
                        "sortable": "true", 
                        "width": 50, 
                        "header": "Events", 
                        "renderer": Zenoss.render.severity, 
                        "id": "severity", 
                        "dataIndex": "severity"
                    }, 
                    {
                        "header": "Name", 
                        "width": 70, 
                        "sortable": "true", 
                        "id": "name", 
                        "dataIndex": "name"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "IP Service", 
                        "renderer": "pass_link", 
                        "id": "getIpserviceLink", 
                        "dataIndex": "getIpserviceLink"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "OS Process", 
                        "renderer": "pass_link", 
                        "id": "getOsprocessLink", 
                        "dataIndex": "getOsprocessLink"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "Java Version", 
                        "renderer": "pass_link", 
                        "id": "javaversion", 
                        "dataIndex": "javaversion"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 120, 
                        "header": "JVM Version", 
                        "renderer": "pass_link", 
                        "id": "vendorproduct", 
                        "dataIndex": "vendorproduct"
                    }, 
                    {
                        "header": "Monitored", 
                        "width": 65, 
                        "sortable": "true", 
                        "id": "monitored", 
                        "dataIndex": "monitored"
                    }, 
                    {
                        "sortable": "true", 
                        "width": 65, 
                        "header": "Locking", 
                        "renderer": Zenoss.render.locking_icons, 
                        "id": "locking", 
                        "dataIndex": "locking"
                    }
                ]

            });
            ZC.JavaAppPanel.superclass.constructor.call(this, config);
        }
    });
    
    Ext.reg('JavaAppPanel', ZC.JavaAppPanel);
    ZC.registerName('JavaApp', _t('JVM'), _t('JVMs'));
    
    })();

