var NEKOKKE = NEKOKKE || {};
NEKOKKE.VIEW_HEIGHT = {
    init : function(){
        this.setParameters();
        this.setKvHeight();
        this.bind();
    },
    setParameters : function(){
        this.$window = $(window);
        this.$target = $('main');
    },
    bind : function(){
        var _self = this;
        this.$window.on('resize',function(){
            _self.setKvHeight();
        });
    },
    setKvHeight : function(){
        this.$target.css('main',this.$window.height());
    }
};
$(function(){
    NEKOKKE.VIEW_HEIGHT.init();
});
