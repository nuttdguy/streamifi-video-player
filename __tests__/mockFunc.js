describe.skip('test', () => {

    test('shoud run test', () => {
        function forEach(items, callback) {
            for (let index = 0; index < items.length; index++) {
                callback(items[index]);
            }
        }


        const mockCallback = jest.fn(x => 42 + x);
        forEach([0, 1], mockCallback);

        // The mock function is called twice
        expect(mockCallback.mock.calls.length).toBe(2);

        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);

        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);

        // The return value of the first call to the function was 42
        expect(mockCallback.mock.results[0].value).toBe(42);

        // The return value of the first call to the function was 43
        expect(mockCallback.mock.results[1].value).toBe(43);

    })

    test('it should show content of mock', () => {
        const myMock = jest.fn();

        const a = new myMock();
        a.a = 'a';
        const b = {a: 'test'};
        const bound = myMock.bind(b);
        bound();

        console.log(myMock.mock.instances);
    })

})