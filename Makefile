xblock_short_name=foobarxblock
xblock_long_name=FoobarXblock

.PHONY: test
test: clean requirements
	cookiecutter --no-input ./
	make -C $(xblock_short_name) test

.PHONY: clean
clean:
	rm -rf $(xblock_short_name)/

.PHONY: requirements
requirements:
	pip install cookiecutter
