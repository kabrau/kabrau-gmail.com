
console.log("INICIO");

$.ajax('http://domain/service-1')
    .done(function (data) {
        console.log("chamada 01", data);

        $.ajax('http://domain/service-2')
            .done(function (data) {
                console.log("chamada 02", data);

                $.ajax('http://domain/service-3')
                    .done(function (data) {
                        console.log("chamada 03", data);
                        
                        console.log("FINAL");
                    })
            })
    })





