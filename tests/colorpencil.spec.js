describe("colorpencil",function(){
	//<placeholders come here>
	it("returns an obect when constructed",function(){
		var	cpencil = new Colorpencil();
		expect(cpencil).not.toBeNull();
	});
	it("instance can take in an input string and generate a classed html output",function(){
		var 	cpencil = new Colorpencil(),
			fragment = '';
		fragment = cpencil.write('red');
		expect(fragment).toBe('<span class="text text-red">red</span>');
	});
});
