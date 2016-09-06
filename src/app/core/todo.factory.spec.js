describe('todoFactory', function() {
    beforeEach(function() {
        bard.appModule('app');
        bard.inject('todoFactory', 'apiUrl', '$httpBackend');
    });

    describe('when getAll is called', function() {
        it('should return data on success', function() {
            var response = {
                data: [{}],
            };

            $httpBackend.whenGET(apiUrl + '/todos').respond(response);

            todoFactory.getAll().then(function(data) {
                expect(data.length).toEqual(1);
            }, function(error) {
                expect(1).toEqual(2);
            });
        });

        it('should return error on fail', function() {
            $httpBackend.whenGET(apiUrl + '/todos').respond(500);

            todoFactory.getAll().then(
                function(data) {
                    expect(1).toBe(2);
                },
                function(error) {
                    expect(error).toBeDefined();
                }
            );
        });
    });

    describe('when add is called', function() {
        it('should return data on success', function() {
            var response = {
                data: [{}],
            };

            $httpBackend.whenPOST(apiUrl + '/todos').respond(response);

            todoFactory.getAll().then(function(data) {
                expect(data.length).toEqual(1);
            }, function(error) {
                expect(1).toEqual(2);
            });
        });

        it('should return error on fail', function() {
            $httpBackend.whenPOST(apiUrl + '/todos').respond(500);

            todoFactory.getAll().then(
                function(data) {
                    expect(1).toBe(2);
                },
                function(error) {
                    expect(error).toBeDefined();
                }
            );
        });
    });

    describe('when getById is called', function() {
        var id = 1;

        it('should return data on success', function() {
            var response = {
                data: [{}]
            };

            $httpBackend.whenGET(apiUrl + '/todos/' + id).respond(response);

            todoFactory.getById(id).then(function(data) {
                expect(data.length).toEqual(1);
            }, function(error) {
                expect(1).toEqual(2);
            });
        });

        it('should return error on fail', function() {
            $httpBackend.whenGET(apiUrl + '/todos/' + id).respond(500);

            todoFactory.getById(id).then(
                function(data) {
                    expect(1).toBe(2);
                },
                function(error) {
                    expect(error).toBeDefined();
                }
            );
        });
    });

    describe('when update is called', function() {
        var updated = {
            name: 'fake',
            todoId: 1
        };
        
        it('should return data on success', function() {
            var response = {
                data: [{}],
            };

            $httpBackend.whenPUT(apiUrl + '/todos/' + updated.todoId).respond(response);

            todoFactory.update(updated).then(function(data) {
                expect(data.length).toEqual(1);
            }, function(error) {
                expect(1).toEqual(2);
            });
        });

        it('should return error on fail', function() {
            $httpBackend.whenPUT(apiUrl + '/todos/' + updated.todoId).respond(500);

            todoFactory.update(updated).then(
                function(data) {
                    expect(1).toBe(2);
                },
                function(error) {
                    expect(error).toBeDefined();
                }
            );
        });
    });

    describe('when update is called', function() {
        var toDelete = {
            name: 'fake',
            todoId: 1
        };
        
        it('should return data on success', function() {
            var response = {
                data: [{}],
            };

            $httpBackend.whenDELETE(apiUrl + '/todos/' + toDelete.todoId).respond(response);

            todoFactory.update(toDelete).then(function(data) {
                expect(data.length).toEqual(1);
            }, function(error) {
                expect(1).toEqual(2);
            });
        });

        it('should return error on fail', function() {
            $httpBackend.whenDELETE(apiUrl + '/todos/' + toDelete.todoId).respond(500);

            todoFactory.update(toDelete).then(
                function(data) {
                    expect(1).toBe(2);
                },
                function(error) {
                    expect(error).toBeDefined();
                }
            );
        });
    });
});