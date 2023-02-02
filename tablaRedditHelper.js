({
    getRedditList : function(component, event, helper) {
        var action = component.get("c.ListDatos");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == "SUCCESS"){
                var result = response.getReturnValue();
                console.log(result);
                component.set("v.registros", result);
            }
        });
        $A.enqueueAction(action);
        
    }
})
