(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.ceed = function() {
	this.initialize(img.ceed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,138);


(lib.fifa_txt = function() {
	this.initialize(img.fifa_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,63);


(lib.FlashAICBAssets = function() {
	this.initialize(img.FlashAICBAssets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,120);


(lib.Grass_728x45 = function() {
	this.initialize(img.Grass_728x45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,45);


(lib.Hue_Saturation1copy = function() {
	this.initialize(img.Hue_Saturation1copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,123);


(lib.optima = function() {
	this.initialize(img.optima);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,126);


(lib.rio = function() {
	this.initialize(img.rio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,196);


(lib.sprtg = function() {
	this.initialize(img.sprtg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,136);


(lib.Stadium_728x45 = function() {
	this.initialize(img.Stadium_728x45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,45);


(lib.utpcopy = function() {
	this.initialize(img.utpcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,77);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.utp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.utpcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.utp, new cjs.Rectangle(0,0,271,77), null);


(lib.txt1top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.fifa_txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1top, new cjs.Rectangle(0,0,221,63), null);


(lib.Stadium_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Stadium_728x45();
	this.instance.parent = this;
	this.instance.setTransform(-364,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Stadium_0, new cjs.Rectangle(-364,-22.5,728,45), null);


(lib.sprtg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprtg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprtg_1, new cjs.Rectangle(0,0,231,136), null);


(lib.optima_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.optima();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.optima_1, new cjs.Rectangle(0,0,245,126), null);


(lib.Logo_begins = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlTBFIAAiJIKnAAIAACJg");
	this.shape.setTransform(-0.2,33.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmUDrIAAnVIMpAAIAAHVg");
	mask.setTransform(0,-1);

	// Layer 1
	this.instance = new lib.FlashAICBAssets();
	this.instance.parent = this;
	this.instance.setTransform(-124,-29,0.64,0.64);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnBHCIAAuDIODAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo_begins, new cjs.Rectangle(-45,-45,90,90), null);


(lib.Grass_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Grass_728x45();
	this.instance.parent = this;
	this.instance.setTransform(-364,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Grass_0, new cjs.Rectangle(-364,-22.5,728,45), null);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0.5,-5.3,0.5,80).s().p("AyvJYIAAyvMAlfAAAIAASvg");
	this.shape.setTransform(120,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient, new cjs.Rectangle(0,0,240,120), null);


(lib._final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgCAQIAAgLIgJAFIgDgFIAJgFIgJgEIADgFIAJAFIAAgLIAGAAIgBALIAJgFIADAFIgJAEIAJAFIgDAFIgJgFIABALg");
	this.shape.setTransform(79.1,-18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AjOCHIAAgQIAQAAIAAAQgAuICFIgGgBIgGgDIgEgFIgEgGIgCgIQgCgFAAgPIACgUIACgIIAEgGIAEgFIAGgDIAGgCIAHgBIAHABIAGACIAFADIAFAFIADAGIADAIQACANAAAHQgBAPgBAFIgDAIIgDAFIgFAGIgFACIgGACIgHACgAuIA8QgDACgCAEIgCAKIgBAOIABANIACAKQACAEADACQADACAEAAQAEAAADgCQADgCABgEQACgDABgHIABgNIgBgOQgBgFgCgFQgBgEgDgCQgDgCgEAAQgEAAgDACgAmECFIgGgCQgFgCgDgEQgDgEgCgGQgBgGAAgHQAAgIABgGQACgGADgEQADgEAGgCIAFgCIAHgBIAKABIALADIAAAMIgKgBIgIgBIgHABIgEAEIgCAFIgBAJIABAIIACAFQACADACABQADABAEAAIAIAAIALgCIAAAMIgLADIgLABgAm9CFIgGgCQgFgCgDgEQgDgEgCgGQgBgGAAgHQAAgIABgGQACgGADgEQADgEAGgCIAFgCIAHgBIAKABIALADIAAAMIgKgBIgIgBIgHABIgEAEIgCAFIgBAJIABAIIACAFQACADACABQADABAEAAIAIAAIALgCIAAAMIgLADIgLABgAoFCDQgGgCgDgEQgEgEgBgGQgCgGAAgHQAAgHACgHQABgGAEgEQADgEAGgCQAEgCAJgBQAGAAAIADQAFACAEAEQADAEACAGQABAHAAAHQAAAHgBAGQgCAGgDAFQgEADgFACQgIADgGAAIgNgDgAn9BUQgDABgBACIgDAGIAAAJIAAAJIADAGIAEADIAFAAIAGAAIAEgDIACgGIABgJIgBgJIgCgGQgCgCgCgBIgGgBIgFABgAjuCFIAAgoIgUAoIgTAAIAAg/IARAAIAAAoIATgoIATAAIAAA/gAk1CFIAAgoIgUAoIgTAAIAAg/IARAAIAAAoIATgoIATAAIAAA/gApeCFIAAhXIAhAAQAIAAAFACQAGACADADQAEADACAHQABAFAAAHQAAAJgBAFQgCAFgEAFQgDADgGACQgFACgIAAIgRAAIAAAbgApOBcIAQAAIAGgBQADgBABgDQACgCABgCIABgIIgBgHQgBgCgCgCQgBgCgDgCIgGgBIgQAAgArACFIAAg/IAeAAIAJABQAEABADACQACACABADIABA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gDgCIgEgHQgBgDAAgFIAAgHIADgFIAEgFIAIgDQAHgCAQgBIAAgCIgBgDQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgEgBgIAAQgHAAgKACIAAgNQAIgCAPgBIAKABQAFABAEADQAEADABADQADAFAAAEIAAAsIgQAAIAAgEQgEACgGABIgJACQgFAAgDgCgAQ4g6IgEADQgCACAAADQAAAEACACQACACAFAAIAHgBIAGgDIAAgNQgMAAgEABgAOqgfQgGgCgDgEQgEgDgBgHQgCgFAAgJQAAgIACgHQACgGADgEQAEgEAFgCQAGgBAHgBQAIABAFABQAFACADAEQAEADABAGQACAGAAAIIAAAJIgpAAQABAGADADIAEACIAGABIALgBQAGgBAIgDIAAANQgHACgHABIgMACQgIAAgFgCgAPDhDIAAgGIgCgEQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgGgBIgGABQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgDAEIgBAGIAZAAgAMhgfQgFgCgEgEQgDgDgCgHQgBgFAAgJQAAgIABgHQACgGAEgEQADgEAGgCQAFgBAIgBQAHABAFABQAFACAEAEQADADACAGQACAGAAAIIgBAJIgoAAQABAGACADIAEACIAGABIAMgBQAGgBAHgDIAAANQgGACgHABIgNACQgIAAgFgCgAM7hDIgBgGIgCgEQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFgBIgGABQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIgCAEIgBAGIAZAAgAIqggQgGgCgDgEQgEgEgBgGQgCgGAAgHQAAgHACgHQABgGAEgEQADgEAGgDQAEgBAJgBQAGAAAIACQAFADAEAEQADAEACAGQABAHAAAHQAAAHgBAGQgCAGgDAEQgEAFgFABQgIADgGAAIgNgDgAIyhPQgDAAgBADIgDAGIAAAJIAAAJIADAFIAEAEIAFABIAGgBIAEgEIACgFIABgJIgBgJIgCgGQgCgDgCAAIgGgBIgFABgAF2gfQgEgBgCgCIgEgHQgCgDAAgFIABgHIACgFIAFgFIAHgDQAHgCARgBIAAgCIgBgDQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDgBgIAAQgIAAgKACIAAgNQAIgCAPgBIALABQAFABADADQAEADACADQACAFAAAEIAAAsIgQAAIAAgEQgEACgFABIgKACQgEAAgEgCgAGAg6IgEADQgBACAAADQAAAEACACQACACAEAAIAHgBIAHgDIAAgNQgNAAgEABgAD1ggQgGgCgDgEQgEgEgCgGQgBgGAAgHIAAgCIABgUIACgJIADgJIAJgKQAFgDAGgCQAIgEATgCIAAAOQgNABgGACIgJADQgEADgDAEIgCAEIAGgCIAHgBQAFAAAIACQAGADADAEQAEAEABAGQACAHAAAHQAAAHgCAGQgBAGgEAEQgDAFgGABQgIADgFAAQgKgBgDgCgAD8hPQgCAAgCADIgCAGIgBAJIABAJIACAFIAEAEIAGABIAFgBIAEgEIADgFIAAgJIAAgJIgDgGQgBgDgDAAIgFgBIgGABgAhFgfQgGgCgDgEQgEgDgBgHQgCgFAAgJQAAgIACgHQACgGADgEQAEgEAFgCQAGgBAHgBQAIABAFABQAFACADAEQAEADABAGQACAGAAAIIAAAJIgpAAQABAGADADIAEACIAGABIALgBQAGgBAIgDIAAANQgHACgHABIgMACQgIAAgFgCgAgshDIAAgGIgCgEQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgGgBIgGABQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgDAEIgBAGIAZAAgAlKgfQgEgBgDgCIgEgHQgBgDAAgFIAAgHIADgFIAEgFIAIgDQAHgCAQgBIAAgCIgBgDQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgEgBgIAAQgHAAgKACIAAgNQAIgCAPgBIAKABQAFABAEADQAEADABADQADAFAAAEIAAAsIgQAAIAAgEQgEACgGABIgJACQgFAAgDgCgAlAg6IgEADQgCACAAADQAAAEACACQACACAFAAIAHgBIAGgDIAAgNQgMAAgEABgAtZgfQgEgBgCgCIgEgHQgCgDAAgFIABgHIACgFIAFgFIAHgDQAHgCARgBIAAgCIgBgDQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDgBgIAAQgIAAgKACIAAgNQAIgCAPgBIALABQAFABADADQAEADACADQACAFAAAEIAAAsIgQAAIAAgEQgEACgFABIgKACQgEAAgEgCgAtPg6IgEADQgBACAAADQAAAEACACQACACAEAAIAHgBIAHgDIAAgNQgNAAgEABgAsngfIAAgJIAHABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgxIAuAAIAAA/IgQAAIAAgyIgPAAIAAAkIgBAGIgCAFIgFADIgGAAIgOgBgAzggeIgHgCIgGgDIgFgGIgEgGIgCgIIgCgTIACgTIACgHIAEgGIAFgGIAGgDIAHgDIAJAAIAKAAIAHADIAGADIAFAGIADAGIADAHIACATQgBAOgBAFIgDAIIgDAGIgFAGIgGADIgHACIgKAAIgJAAgAzfhmQgEABgCAFQgCADgBAHIgBAMIABAOIADAKQACADAEACQADACAFAAQAGAAADgCQAEgCACgDQACgEABgGIABgOIgBgMQgBgHgCgDQgCgEgEgCQgDgCgGAAQgFAAgDACgAUdgeIAAgoIgUAoIgSAAIAAg/IAQAAIAAAoIAUgoIASAAIAAA/gATWgeIAAgoIgUAoIgSAAIAAg/IAQAAIAAAoIAUgoIASAAIAAA/gAKIgeIAAgaIgXAAIAAAaIgRAAIAAg/IARAAIAAAYIAXAAIAAgYIAQAAIAAA/gAIBgeIggghIAAAhIgRAAIAAhXIARAAIAAAgIAgggIAVAAIgqArIArAsgAFQgeIgUgUIAAAUIgQAAIAAg/IAQAAIAAATIATgTIAVAAIggAfIAgAggACGgeIghghIAAAhIgQAAIAAhXIAQAAIAAAgIAhggIAVAAIgrArIArAsgAhxgeIAAgaIgXAAIAAAaIgQAAIAAg/IAQAAIAAAYIAXAAIAAgYIARAAIAAA/gAjCgeIAAgxIgQAAIAAgOIA0AAIgFAOIgOAAIAAAxgAlzgeIAAgxIgVAAIAAAxIgQAAIAAg/IA1AAIAAA/gAnageIAAgoIgUAoIgTAAIAAg/IARAAIAAAoIATgoIATAAIAAA/gAoggeIAAg/IAQAAIAAA/gApZgeIAAg/IAQAAIAAAYIAMAAIAJABQAEAAADACQAEADACAEQACAEAAAGQAAAGgCAEQgCADgEADIgHACIgJABgApJgqIALAAQAFgBACgBQACgBAAgEQAAgDgCgDQgCgBgFAAIgLAAgAp3geIAAgaIgXAAIAAAaIgRAAIAAg/IARAAIAAAYIAXAAIAAgYIAQAAIAAA/gAregeIAAg/IAQAAIAAAYIAMAAIAJABQAEAAADACQAEADACAEQACAEAAAGQAAAGgCAEQgCADgEADIgHACIgJABgArOgqIALAAQAFgBACgBQACgBAAgEQAAgDgCgDQgCgBgFAAIgLAAgAuCgeIAAgoIgUAoIgTAAIAAg/IARAAIAAAoIATgoIATAAIAAA/gAwRgeIAAgoIgUAoIgTAAIAAg/IARAAIAAAoIATgoIATAAIAAA/gA0ehgIAAgNIgKAHIgEgIIALgFIgLgGIAEgHIAKAHIAAgNIAIAAIAAANIALgHIAEAHIgMAGIAMAFIgEAIIgLgHIAAANgAULhkIgFgDQgDgCgBgCIgBgFIAJAAQABADACACIAEABIAEgBQADgCAAgDIAJAAIgBAFIgDAEIgFADIgHACIgGgCgAnthkIgFgDIgDgEIgBgFIAJAAQAAADACACIAFABIAEgBQACgCABgDIAJAAIgCAFIgDAEIgFADIgGACIgHgCg");
	this.shape_1.setTransform(256.2,-37.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.FlashAICBAssets();
	this.instance.parent = this;
	this.instance.setTransform(-76,-78,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._final, new cjs.Rectangle(-76,-78,464.8,76.8), null);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fade, new cjs.Rectangle(0,0,240,400), null);


(lib.ceed_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.ceed_logo, null, null);


(lib.ceed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ceed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ceed_1, new cjs.Rectangle(0,0,232,138), null);


(lib.new_logo_sportage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABxDiIgjhtIibAAIgiBtIhYAAICTnDIBpAAICTHDgAg2AtIBtAAIg3isg");
	this.shape.setTransform(-332.5,13.6,1.298,1.298);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqDiIAAnDIBVAAIAAHDg");
	this.shape_1.setTransform(-368.6,13.6,1.298,1.298);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABHDiIijiuIAACuIhWAAIAAnDIBWAAIAACqICiiqIBrAAIjYDgIDaDjg");
	this.shape_2.setTransform(-402.8,13.6,1.298,1.298);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkpDPIAAmcIJSAAIhDBWIlkABIgBBIIFXAAIAABVIlXAAIAABQIFlAAIBDBYg");
	this.shape_3.setTransform(387.1,14.8,1.298,1.298);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjGDPQg8AAgkggQgdgZAAgfIAAjuQAAgdAegZQAkghA6ABIILAAIAABWIm6AAQgYAAgQANQgPALgBAPIAACgQAAAQANALQAOAMAXAAIEcAAQAPAAAJgMQAIgMAAgPIAAgwIiWAAIguhOIFIAAIAACeQAAAsggAZQgiAZhCABg");
	this.shape_4.setTransform(299.7,14.8,1.298,1.298);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AChBuIk+AAIhABkIiZAAIENmlIDZAAIEHGlIiXACgAhlAXIDPAAIhmilg");
	this.shape_5.setTransform(205.9,14.3,1.298,1.298);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AHWDqImLkVID2AAQAVAAAOgPQAOgPAAgWQAAgWgPgPQgPgPgTAAIk4AAIAADvQAAAkgYAXQgeAcg7AAInAAAQgxAAgcgYQgdgYAAgnIAAjvQAAgiAkgaQAkgaAxAAIOeAAQBOAAAfAbQAbAYAAA1IAAA/QABAjgZAaQgcAegygBIg6AAIEmDSgAnxiFQgKAMgBAOIAACeQAAAPAMAMQAOAOAUAAIETAAQAUAAAOgOQAMgLAAgPIAAigQAAgOgMgLQgNgNgVgBIkTAAQgVAAgOAOg");
	this.shape_6.setTransform(7,18.4,1.298,1.298);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhSDPIAAlGIjqAAIhGhWIMEAAIhABWIjqAAIAAFGg");
	this.shape_7.setTransform(127.7,14.8,1.298,1.298);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlWDPIAAmcIIlAAQBBgBAlAYQAiAXAAAoIAABnQAAAmghAZQgmAbhBAAIkJAAIhDhVIEQAAQAcAAAQgPQAQgOAAgbQAAgWgQgPQgRgPgbAAIlAAAIAAFGg");
	this.shape_8.setTransform(-129.2,14.8,1.298,1.298);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlaDqIA3hfIGRAAQArAAAAgiQAAgcgfgHQhogcjWg0QgogKgcgVQgpgeAAgvQAAgwAhgfQAogkBLAAIH4AAIg4BYImQAAQgQgBgKAJQgJAIAAALQAAAXAjAIIFtBaQBbAYAABXQAAAzgjAjQggAhgoABg");
	this.shape_9.setTransform(-225.1,11.3,1.298,1.298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.new_logo_sportage, new cjs.Rectangle(-426,-19,851.8,67.8), null);


(lib.new_logo_rio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABxDiIgjhtIibAAIgiBtIhYAAICTnDIBpAAICTHDgAg2AuIBtAAIg3iug");
	this.shape.setTransform(-78.7,4.2,1.336,1.336);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqDiIAAnDIBVAAIAAHDg");
	this.shape_1.setTransform(-115.9,4.2,1.336,1.336);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABHDiIijiuIAACuIhWAAIAAnDIBWAAIAACqICiiqIBrAAIjYDgIDaDjg");
	this.shape_2.setTransform(-151.1,4.2,1.336,1.336);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACtEoIkQj1QgXgVgKgNQgGgHgEgKQgDgIgBgHQAAgHAEgIQACgKAHgGQAIgIAQgGQASgFAXAAICXAAQANAAALgBQAVgEALgLQAHgGAEgKQADgJAAgKIAAgeQAAgOgGgKQgDgIgKgHQgIgGgQgEQgMgCgPAAIkxAAIAAFtIkCAAIAAnPILvAAQAvAAAiAdQARAQAJAUQALAYAAAeIAABaQAAAZgLAQQgGALgNAJQgRANgYAFQgWAGgZAAIh+AAIFQEpg");
	this.shape_3.setTransform(49.8,13.5,1.336,1.336);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah6DYQi6AAhZhJQghgcgPggQgMgaAAgYIAAhEQAAgYAMgZQAZg0BBgiQBZgtCQAAID1AAQC6AABZBJQAgAZAQAhQAMAZAAAYIAABEQAAAYgMAaQgZA0hCAkQhYAtiQAAgAivhyQgUAQgMAWQgLAVAAAUIAABEQAAAUALAVQASAiAlAUQAqAZA3AAIBuAAQBKAAAvgoQAUgRALgWQALgVAAgUIAAhEQAAgUgLgVQgRghglgUQgqgXg4ABIhtAAQhKgBgvAmg");
	this.shape_4.setTransform(232.6,6.8,1.336,1.336);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah7DJIAAmSID3AAIAAGSg");
	this.shape_5.setTransform(138.3,7.5,1.336,1.336);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.new_logo_rio, new cjs.Rectangle(-175,-26,468.9,79), null);


(lib.new_logo_optima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABxDiIgjhtIibAAIgiBtIhYAAICTnDIBpAAICTHDgAg2AuIBtAAIg3iug");
	this.shape.setTransform(-242.4,12.5,1.397,1.397);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqDiIAAnDIBVAAIAAHDg");
	this.shape_1.setTransform(-281.2,12.5,1.397,1.397);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABHDiIijiuIAACuIhWAAIAAnDIBWAAIAACqICiiqIBrAAIjYDgIDaDjg");
	this.shape_2.setTransform(-318,12.5,1.397,1.397);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjnDpQg2gBgjgRQgygZAAg7IAAj4QgBg4AngdQAngeBJABIHBAAQBUgBAkApQAWAbAAAmIAAD0QAAAvghAgQgmAjhDABgAi6h3QgZAUAAAhIAACPQAAAgAaAUQAZATArAAIDmAAQAtAAAagSQAagSgBgfIAAiXQAAgcgWgTQgagVgrgBIjvAAQgpABgYATg");
	this.shape_3.setTransform(-123.3,12.6,1.397,1.397);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmsDnIE2nOIDnAAIE8HOIjbAAIhMh1IkSAAIhNB2gABgAjIhkiXIhjCXIDHAAg");
	this.shape_4.setTransform(396.1,12.7,1.397,1.397);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmkjoIDOAAIDYDoIDNjoIDWAAIAAHRIjMAAIAAkJIi6DOIg7AAIi4jJIAAEEIjQAAg");
	this.shape_5.setTransform(271.2,12.7,1.397,1.397);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhpDoIAAnQIDTACIAAHOg");
	this.shape_6.setTransform(187.5,12.6,1.397,1.397);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhoDpIAAldIjxAAIhgh0INzAAIhZBzIj0AAIAAFeg");
	this.shape_7.setTransform(105.8,12.7,1.397,1.397);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Al+DpIAAnQIJcgBQBfAAAlAhQAcAYgBAxIABB/QAAAnglAZQglAYg+AAIktAAIhehyIFLAAQAOAAAHgLQAGgIAAgHIAAgyQgBgHgJgGQgKgFgNAAIl0AAIAAFgg");
	this.shape_8.setTransform(-9.1,12.6,1.397,1.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.new_logo_optima, new cjs.Rectangle(-343,-20,799.2,65.3), null);


(lib.new_logo_ceed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABxDiIgjhtIibAAIgiBtIhYAAICTnEIBpAAICTHEgAg2AuIBtAAIg3iug");
	this.shape.setTransform(-136.6,29,1.31,1.31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqDiIAAnEIBVAAIAAHEg");
	this.shape_1.setTransform(-173,29,1.31,1.31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABHDiIijiuIAACuIhWAAIAAnEIBWAAIAACrICiirIBrAAIjYDhIDaDjg");
	this.shape_2.setTransform(-207.6,29,1.31,1.31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiiE1QgvAAg5gOQhFgRgbgaQgkgkAAgdIgBjJQAAguAqgpQBCg+CNAAIGcAAIAAh3QAAgIAMgIQANgKAUAAIA6AAQAKAAAMAJQAOAJAAAKIAAHGQAAAyhOArQhNAqhVAAgAjcg5QgaAJgLAQIgFANIAAC4QgBAOANALQALAMAdAIQAXAHAQAAIElAAQAxAAAygOQAVgGALgMQAKgLAAgLIAAjsIl+AAQg0AAgxAQg");
	this.shape_3.setTransform(323.3,18.6,1.31,1.31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BnQgKgCgFgIQgEgIABgJIAWiRQACgQANgJQAJgIAHAAIBJAAQAKAAAGAIQAGAIgCALIgVCPQgCARgMAKQgJAIgJAAg");
	this.shape_4.setTransform(265.8,-8.6,1.31,1.31);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AigDwQhpAAhEgxQg/gtgBhBIAAi4QAAgpA5goQBMg2CGAAIErAAQBMAABFAeQBUAlAAA3IAACGQgBAogjAAIpwAAIABANQAEARALAPQAnAtBvAAIC5AAQANAAAMAKQAMAKAAAJIAAAmQAAAFgGAJQgJAKgOABgAjhh8QglARAAAQIAAA0IIRAAIAAg7QAAgIgcgPQgqgXhHAAIj/AAQg2AAgqAUg");
	this.shape_5.setTransform(202.2,27.6,1.31,1.31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AigDwQhpAAhEgxQhAgtABhBIAAi4QgBgpA5goQBMg2CGAAIEsAAQBKAABGAeQBUAlgBA3IAACGQAAAogkAAIpvAAIABANQAEARAMAPQAlAtBvAAIC6AAQANAAAMAKQALAKAAAJIAAAmQABAFgHAJQgIAKgOABgAjhh8QglARAAAQIAAA0IIRAAIAAg7QAAgIgcgPQgqgXhIAAIj+AAQg3AAgpAUg");
	this.shape_6.setTransform(91.4,27.6,1.31,1.31);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjDDvQg3ABg8gWQhigjAAhKIAAjdQACggAggfQA/hACZABIITAAIASAFQARAHABAOIAAAnQgBAKgKAJQgMAKgNAAIouAAQgbAAgbAMQgfANgBASIAADGQAAAQAXAOQAfAVA/AAIIPAAQALgBAMAKQAMAKAAAHIAAAqQAAAIgIAGQgKAKgRgBg");
	this.shape_7.setTransform(-20.1,27.7,1.31,1.31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.new_logo_ceed, new cjs.Rectangle(-231,-22,606.8,81.1), null);


(lib.car_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhzDYQhMgSlUiPQlMiKAIAAQABhCCtglQCVgfD5gGQDhgEDgARQDdARBoAeQDPA6BfBIQBhBIgzA+QgvA5mbAqQj3AZiEAAQhOAAgngJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_shadow, new cjs.Rectangle(-85.6,-22.4,171.3,45), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,240,400), null);


(lib.Ball_zero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hue_Saturation1copy();
	this.instance.parent = this;
	this.instance.setTransform(-62,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ball_zero, new cjs.Rectangle(-62,-62,123,123), null);


(lib.btn_glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA0C24").s().p("EjezBP7MAAAif1MG9nAAAMAAACf1g");
	this.shape.setTransform(94.2,33.8,0.066,0.066);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_glow, new cjs.Rectangle(0,0,188.4,67.6), null);


(lib._18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBASIAAgQIgPAAIAAgDIAPAAIAAgPIADAAIAAAPIAPAAIAAADIgPAAIAAAQg");
	this.shape.setTransform(12.5,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAdQgEgBgDgDIgDgEQgCgDAAgDQAAgDACgDIADgEQACgDAIgCIgFgCIgFgDIgCgFIgBgEIABgHIAEgEQACgCAEgBIAHgBIAIABIAFADIAFAEIABAHIgBAEIgDAEIgDAEIgGACIAGACIAFADIADAEIABAGQAAADgBADQgBACgEACQgCADgEABIgJABIgIgBgAgFADIgFADIgDADIgCAGIABAEIADAEIAFACIAGAAIAHAAIAFgCIACgEIABgEIgBgGIgDgDIgFgDIgGgCIgFACgAgFgYIgEACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgBAFIABAEIADADIAEADIAFACIAFgCIAFgDIACgDIABgEIgBgFIgCgDIgFgCIgFAAIgFAAg");
	this.shape_1.setTransform(7.9,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADAdIAAg0IgKACIAAgEIAPgDIAAA5g");
	this.shape_2.setTransform(3.4,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._18, new cjs.Rectangle(0,0,16.8,13.6), null);


(lib.Stadium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Stadium_0();
	this.instance.parent = this;
	this.instance.setTransform(364,0.5);

	this.instance_1 = new lib.Stadium_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-364,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#95926F","#4F4F3A"],[0,1],-36.5,0,36.5,0).s().p("AlsChIAAlCILZAAIAAFCg");
	this.shape.setTransform(-1.6,0,0.616,1,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Stadium, new cjs.Rectangle(-728,-22.5,1456,45.5), null);


(lib.rio_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiOIsQgxgFhMhkQgQgVgPgiQgOghgKgMQgMgPgDgMIAAgIQhfghhlghQjKhBggAGQgaAFgGARQgGATgWAJQgdANgZgIIgzgZQgZgMgDgXQgBgggGgXQgYhpgBgZQAAgIgFgkQgEgkgBgdIAGhEQADgmgJgYQgLgcAKgaQAIgXAcgcQAgggAVgSQAggaAogYQA8gjCHhGQAZgIAjgCIA5gBIC+gDQAvAACrAJQCrAJAoAFQAmAEA2AVQAwARAlAVQAaAOBNA2QBKA0AGADQAJAEAMgBIAUgDQAKAAASAJQAUAKAIALQAHAKgHAJIgJAGIAoAYQAwAbAlATIBdAvQA4AbApAQQApAQATAYQAJAMABAIIAbA6QAbA/AGAcQACAJAQArQALAagEAgQgEAogHAcQgGAYgNAcQgBAEAAAWQAAASgKAGQgYAPgigJQgQgEggALQgkANgRAEIhZAWQgQADgZAAQgaAAg+AMQg+ALgUAHIggAPQgTAJgYAGQgbAHgtgEQgbgDg9gKQgmgGgqADIgjADIh4gKIgRApQgUAsgWAPQgXARghAAIhAgHg");
	mask.setTransform(113.7,86.9);

	// Layer 1
	this.instance = new lib.rio();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.car_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.3,115.9,0.85,0.85);
	this.instance_1.alpha = 0.809;
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_1.cache(-88,-24,175,49);

	this.instance_2 = new lib.car_shadow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(111.3,120.2,1.05,1.05);
	this.instance_2.alpha = 0.449;
	this.instance_2.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_2.cache(-88,-24,175,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rio_1, new cjs.Rectangle(12.9,30.6,201.7,125), null);


(lib.grass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Grass_0();
	this.instance.parent = this;
	this.instance.setTransform(364,0);

	this.instance_1 = new lib.Grass_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-364,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#498D31","#366E24"],[0,1],-36.5,0,36.5,0).s().p("AlsChIAAlCILZAAIAAFCg");
	this.shape.setTransform(-1.6,0,0.616,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.grass, new cjs.Rectangle(-728,-22.5,1456,45), null);


(lib.Sportage_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprtg_1();
	this.instance.parent = this;
	this.instance.setTransform(21.5,0,1,1,0,0,0,115.5,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sportage_new, new cjs.Rectangle(-94,-68,231,136), null);


(lib.Rio_New = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rio_1();
	this.instance.parent = this;
	this.instance.setTransform(33,11,1,1,0,0,0,120,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rio_New, new cjs.Rectangle(-87,-87,240,196), null);


(lib.Optima_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.optima_1();
	this.instance.parent = this;
	this.instance.setTransform(18.5,0,1,1,0,0,0,122.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Optima_new, new cjs.Rectangle(-104,-63,245,126), null);


(lib.Ceed_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ceed_logo();
	this.instance.parent = this;
	this.instance.setTransform(-73.6,-35,1,1,0,0,0,63,24);

	this.instance_1 = new lib.ceed_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21,0,1,1,0,0,0,116,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ceed_new, new cjs.Rectangle(-95,-69,232,138), null);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ball.psd
	this.instance = new lib.Ball_zero();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-62,-62,123,123), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BbIAAi1IB5AAIAAAeIhXAAIAAAuIBVAAIgLAbIhKAAIAAAxIBXAAIAAAdg");
	this.shape.setTransform(65.6,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BbIAAi1IB6AAIAAAeIhXAAIAAAuIBTAAIgLAbIhIAAIAAAxIBXAAIAAAdg");
	this.shape_1.setTransform(50.6,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjBbIAAhOIhEAAIAABOIgjAAIAAi1IAjAAIAABLIBEAAIAAhLIAiAAIAAC1g");
	this.shape_2.setTransform(34.3,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BbIAAi1IAjAAIBFAAIAAAeIhFAAIAAAuIAWAAQAOAAAMACQALAEAIAFQAIAGAEAKQAFALAAAPQAAAQgFALQgEAKgIAGQgIAFgLACQgLACgPAAgAgYBAIAWAAIALgBQAFgBAEgDQADgDABgEQADgFAAgIQAAgIgDgFQgBgFgDgDQgEgDgFgBIgLgBIgWAAg");
	this.shape_3.setTransform(18.9,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBbQgJgBgHgDQgHgDgFgFQgGgEgEgGQgFgGgDgHQgDgHgCgJQgCgLgCgcQAAgOAEgZQACgJADgHQADgHAFgGQAEgGAGgFQAFgEAHgDQAHgDAJgCQAJgBAJAAQAKAAAJABQAJACAHADQAHADAFAEQAGAFAEAGQAFAGADAHQADAHACAJQAEAZAAAOQgCAcgCALQgCAJgDAHQgDAHgFAGQgEAGgGAEQgFAFgHADQgHADgJABIgTABIgSgBgAgRg6QgIAEgEAIQgFAIgCAMQgCAMAAAPQAAAQACAMQACALAFAIQAEAIAIAEQAHAEAKAAQALAAAHgEQAIgEAEgIQAFgIACgLQACgMAAgQQAAgPgCgMQgCgMgFgIQgEgIgIgEQgHgEgLAAQgKAAgHAEg");
	this.shape_4.setTransform(2.6,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhABbIAAi1IBFAAQAQAAALAEQALAEAIAHQAHAIAEALQADAMAAARQAAAQgDALQgEAMgHAHQgIAIgLADQgMAEgPABIgiAAIAAA4gAgdAFIAeAAQAIAAAGgCQAFgCAEgEQAEgEABgGQACgHAAgHQAAgJgCgGQgBgGgEgEQgDgFgGgCQgFgBgJAAIgeAAg");
	this.shape_5.setTransform(-13.8,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAtBzIAAgwIhZAAIAAAwIgjAAIAAhMIARAAIAJgYQAEgLADgLQADgQACgpIAAgyIBpAAIAACZIAQAAIAABMgAgGg5QgBAjgDAQIgGAWIgKAXIA4AAIAAh9IgkAAg");
	this.shape_6.setTransform(-30.6,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBbQgJgBgHgDQgHgDgFgFQgGgEgEgGQgFgGgDgHQgDgHgCgJQgCgLgCgcQAAgOAEgZQACgJADgHQADgHAFgGQAEgGAGgFQAFgEAHgDQAHgDAJgCQAJgBAJAAQAKAAAJABQAJACAHADQAHADAFAEQAGAFAEAGQAFAGADAHQADAHACAJQAEAZAAAOQgCAcgCALQgCAJgDAHQgDAHgFAGQgEAGgGAEQgFAFgHADQgHADgJABIgTABIgSgBgAgRg6QgIAEgEAIQgFAIgCAMQgCAMAAAPQAAAQACAMQACALAFAIQAEAIAIAEQAHAEAKAAQALAAAHgEQAIgEAEgIQAFgIACgLQACgMAAgQQAAgPgCgMQgCgMgFgIQgEgIgIgEQgHgEgLAAQgKAAgHAEg");
	this.shape_7.setTransform(-47.5,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBbIAAiXIhCAAIAACXIgjAAIAAi1ICHAAIAAC1g");
	this.shape_8.setTransform(-64.5,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BbIAAi1IAjAAIAABMIAUAAQAOAAALACQAMAEAIAFQAIAGAEALQAEAKABAPQgBAQgEALQgEAKgIAFQgIAGgMACQgKACgPAAgAgXBAIAUAAIAKgBQAGgBADgDQAEgCACgFQABgFAAgIQAAgIgBgGQgCgEgEgDQgDgCgGgCIgKAAIgUAAg");
	this.shape_9.setTransform(39.2,-15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTBbIAAiXIg4AAIAAgeICXAAIgLAeIgzAAIAACXg");
	this.shape_10.setTransform(23.6,-15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAtBbIgNgrIg+AAIgOArIgjAAIA7i1IAqAAIA6C1gAAWASIgWhEIgVBEIArAAg");
	this.shape_11.setTransform(7.3,-15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBbIAAhNIhEAAIAABNIgjAAIAAi1IAjAAIAABMIBEAAIAAhMIAiAAIAAC1g");
	this.shape_12.setTransform(-9.4,-15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeBaIgdgGIAAgcIAfAGQAMACAMAAQAHAAAGgCQAFgBAEgEQAEgCABgGQACgEABgHQAAgIgEgFQgDgGgGgDQgFgDgIgBIgRgBIgNAAIAAgcIANAAIANgBQAGgBAFgEQAGgCADgGQADgFAAgIQAAgJgFgFQgGgEgMgBQgMgBgMADQgLABgOAFIAAgbQAKgEAPgDQAOgDAKAAQAOAAALADQALADAHAGQAHAFAEAKQAEAIAAANQAAAGgCAGQgCAFgDAFQgGAKgLAFQAHADAGAEQAFADAEAFQAEAGACAHQACAIAAAJQAAAPgEAKQgEALgJAGQgIAHgLADQgMADgNAAQgOAAgPgDg");
	this.shape_13.setTransform(-25,-15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsBXIAAgaQANADAXABQARAAAHgDQAEgCACgEQACgDAAgHIAAgQIgOAFQgLADgLAAQgJAAgIgCQgIgDgGgFQgGgEgDgIQgEgJAAgKIAAhOIAhgKIAABaQAAAFAEAEQAEACAIAAQAHAAAMgDIAMgEIAAhcIAhAAIAACLQAAALgEAJQgEAHgHAFQgHAFgLAEQgKABgMAAQgdgBgRgEg");
	this.shape_14.setTransform(-38.9,-15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Layer 2
	this.instance = new lib.btn_glow();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1.083,1,0,0,0,94.2,33.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,alpha:1},9).to({alpha:0},10).wait(1));

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B80C24").s().p("EjezBP7MAAAif1MG9nAAAMAAACf1g");
	this.shape_15.setTransform(0,0,0.072,0.066);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(20));

	// Layer 5
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#880C24").s().p("EjezBP7MAAAif1MG9nAAAMAAACf1g");
	this.shape_16.setTransform(0,1.8,0.072,0.066);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-33.7,204.1,69.3);


// stage content:
(lib.Conf_cup_yandex_main_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_409 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(409).call(this.frame_409).wait(1));

	// 18+
	this.instance = new lib._18();
	this.instance.parent = this;
	this.instance.setTransform(7.3,5.1,1,1,0,0,0,6.8,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(410));

	// br
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODgEg4tAG4MBxbAAAIAAtvMhxbAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(410));

	// Layer 11
	this.instance_1 = new lib._final();
	this.instance_1.parent = this;
	this.instance_1.setTransform(297.1,215.3,1,1,0,0,0,66,130);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(404).to({_off:false},0).to({x:297,y:215,alpha:1},5).wait(1));

	// Layer 10
	this.instance_2 = new lib.fade();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,45,3.033,0.225,0,0,0,120,200);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(395).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(6));

	// Logo_begins
	this.instance_3 = new lib.Logo_begins();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(201).to({x:-45},13).to({_off:true},1).wait(195));

	// Txt_1
	this.instance_4 = new lib.txt1top();
	this.instance_4.parent = this;
	this.instance_4.setTransform(285,44,1,1,0,0,0,110.5,31.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:284.5,y:43.5,alpha:1},14).wait(59).to({alpha:0},13).to({_off:true},1).wait(323));

	// Txt_2
	this.instance_5 = new lib.utp();
	this.instance_5.parent = this;
	this.instance_5.setTransform(850,45,0.9,0.9,0,0,0,135.5,38.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({regX:135.6,scaleX:0.95,scaleY:0.95,x:633.8,y:44.6},17,cjs.Ease.get(1)).wait(389));

	// Button
	this.instance_6 = new lib.btn();
	this.instance_6.parent = this;
	this.instance_6.setTransform(79,45,0.3,0.3,0,0,0,0,0.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(332).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,alpha:1},9).to({scaleX:0.65,scaleY:0.65,y:44.5},3).wait(66));

	// Fade_to_black
	this.instance_7 = new lib.black();
	this.instance_7.parent = this;
	this.instance_7.setTransform(364,45,3.033,0.225,0,0,0,120,200);
	this.instance_7.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(73).to({alpha:0},13).to({_off:true},1).wait(323));

	// ball
	this.instance_8 = new lib.ball();
	this.instance_8.parent = this;
	this.instance_8.setTransform(55,90.5,0.4,0.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(73).to({_off:false},0).to({rotation:360,x:120,y:89},19,cjs.Ease.get(1)).wait(47).to({x:130},0).to({rotation:720,x:161},16,cjs.Ease.get(0.5)).wait(46).to({rotation:1080,x:121},15,cjs.Ease.get(0.5)).wait(49).to({rotation:1440,x:161.6},18,cjs.Ease.get(-0.2)).to({rotation:3600,x:727},126).wait(1));

	// l1
	this.instance_9 = new lib.new_logo_rio();
	this.instance_9.parent = this;
	this.instance_9.setTransform(576.4,77.8,0.13,0.13);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73).to({_off:false},0).to({x:427,y:78},13).wait(53).to({x:270},13).wait(49).to({x:130,alpha:0},13).to({_off:true},1).wait(195));

	// Rio
	this.instance_10 = new lib.Rio_New();
	this.instance_10.parent = this;
	this.instance_10.setTransform(572.3,46.8,0.54,0.54,0,0,0,12.7,10.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(73).to({_off:false},0).to({x:422.9,y:46.9},13).wait(53).to({x:265.7,y:46.8},13).wait(49).to({x:265.9,y:46.9},0).to({x:125.9},13).wait(51).to({x:56.9},13).wait(51).to({scaleX:0.56,scaleY:0.56,x:202.1,y:54.1},12).to({_off:true},68).wait(1));

	// l2
	this.instance_11 = new lib.new_logo_optima();
	this.instance_11.parent = this;
	this.instance_11.setTransform(579.8,76.9,0.13,0.13);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(139).to({_off:false},0).to({x:423,y:77},13).wait(49).to({x:283},13).wait(51).to({x:191,alpha:0},13).to({_off:true},1).wait(131));

	// Optima
	this.instance_12 = new lib.Optima_new();
	this.instance_12.parent = this;
	this.instance_12.setTransform(570.5,46,0.54,0.54,0,0,0,-0.1,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(139).to({_off:false},0).to({x:414},13).wait(49).to({x:274},13).wait(51).to({x:181.3},13).wait(51).to({x:278,y:49},12).to({_off:true},68).wait(1));

	// l3
	this.instance_13 = new lib.new_logo_sportage();
	this.instance_13.parent = this;
	this.instance_13.setTransform(569.5,77,0.13,0.13);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(201).to({_off:false},0).to({x:430},13).wait(51).to({x:319},13).wait(12).to({alpha:0},13).to({_off:true},1).wait(106));

	// Sportage
	this.instance_14 = new lib.Sportage_new();
	this.instance_14.parent = this;
	this.instance_14.setTransform(556.9,42.9,0.5,0.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(201).to({_off:false},0).to({x:417,y:43},13).wait(51).to({x:307},13).wait(51).to({scaleX:0.48,scaleY:0.48,x:360,y:38},12).to({_off:true},68).wait(1));

	// l4
	this.instance_15 = new lib.new_logo_ceed();
	this.instance_15.parent = this;
	this.instance_15.setTransform(568.4,75.5,0.13,0.13);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(265).to({_off:false},0).to({x:440,y:75},13).wait(37).to({x:440.4,y:75.5,alpha:0},14).to({_off:true},1).wait(80));

	// Ceed
	this.instance_16 = new lib.Ceed_new();
	this.instance_16.parent = this;
	this.instance_16.setTransform(557.3,42.5,0.48,0.48);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(265).to({_off:false},0).to({x:429,y:42},13).wait(51).to({scaleX:0.45,scaleY:0.45,x:435,y:43},12).to({_off:true},68).wait(1));

	// Gradient
	this.instance_17 = new lib.gradient();
	this.instance_17.parent = this;
	this.instance_17.setTransform(364,67.5,3.033,0.375,0,0,0,120,59.9);
	this.instance_17.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},409).wait(1));

	// stadium
	this.instance_18 = new lib.Stadium();
	this.instance_18.parent = this;
	this.instance_18.setTransform(728,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(73).to({x:647},13).wait(53).to({y:22.5},0).to({x:566,y:22},13).wait(49).to({x:486},13).wait(51).to({x:405},13).to({_off:true},131).wait(1));

	// grass
	this.instance_19 = new lib.grass();
	this.instance_19.parent = this;
	this.instance_19.setTransform(728,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(73).to({x:565},13).wait(53).to({x:566,y:67.5},0).to({x:404,y:67},13).wait(49).to({x:405},0).to({x:243},13).wait(51).to({x:81},13).to({_off:true},131).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(285,44.5,1535,93.3);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./ceed.png", id:"ceed"},
		{src:"./fifa_txt.png", id:"fifa_txt"},
		{src:"./FlashAICBAssets.png", id:"FlashAICBAssets"},
		{src:"./Grass_728x45.jpg", id:"Grass_728x45"},
		{src:"./Hue_Saturation1copy.png", id:"Hue_Saturation1copy"},
		{src:"./optima.png", id:"optima"},
		{src:"./rio.png", id:"rio"},
		{src:"./sprtg.png", id:"sprtg"},
		{src:"./Stadium_728x45.jpg", id:"Stadium_728x45"},
		{src:"./utpcopy.png", id:"utpcopy"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;