describe('TodoController', function() {
	
	//Global Scope Setup
	var todoController;

	beforeEach(function() {
		bard.appModule('app')
		bard.inject('$controller', '$q', '$rootScope', 'todoFactory');
	});
	
	beforeEach(function() {
		sinon.stub(todoFactory, 'getAll').returns($q.when([{},{},{}]));
		sinon.stub(todoFactory, 'add').returns($q.when([{}]));
		sinon.stub(todoFactory, 'remove').returns($q.when());

		todoController = $controller('TodoController');

		//Come back to this!!!!
		$rootScope.$apply(); 
	});

	bard.verifyNoOutstandingHttpRequests();

	describe('controller', function() {
		it('Should be created succesfully', function() {
			expect('todoController').toBeDefined();
		});
		
		//GetAllTodos
		describe('after getTodos is called', function() {
			it('should have 3 todos in the array', function() {
				expect(todoController.todos.length).toEqual(3)
			});
		});

		//AddTodo
		describe('after adding a todo', function() {
			it('should have 4 todos in the array', function() {
				todoController.blankTodo.name = 'Fake Todo';
				todoController.blankTodo.priority = 1;
				todoController.addTodo();

				$rootScope.$apply();

				expect(todoController.todos.length).toEqual(4)
				expect(todoController.blankTodo === {});
			});
		});

		//RemoveTodo
		describe('after deleting a todo', function() {
			it('should have 2 todos in the array', function() {
				todoController.removeTodo({});

				$rootScope.$apply();

				expect(todoController.todos.length).toEqual(2)
			});
		});
	});
});