// {Name: Coffee}
// {Description: Provides instructions for brewing coffee.}

title("Coffee");

visualHints("How to (brew|prepare|make) coffee?",
    "How to (brew|prepare|make) (latte|americano|espresso)?",
    "What (coffee|recipes|types) do you (know|have)",
    "What coffee do you (prefer|advise)?",
    "What are the (best|most popular) (coffee recipes|coffee types)?"
)

const steps = {

    "americano":
        {
            "desc": "Americano - is an espresso drink, but instead of milk, an Americano is infused with hot water. The result is a drink that still has that wonderful espresso character, but might feel slightly more refreshing, less heavy than a traditional latte or cappuccino",
            "equip": ["6oz cup", "empty glass", "(optional)espresso machine"],
            "ingredients": ["3oz of espresso", "3oz of boiling water"],
            "steps": ["Pre-heat the mug by adding water, then boiling it in the microwave",
                "Pull a 3oz (or more if you like your drink stronger) espresso shot into a separate glass",
                "Pour about 3oz or so of hot water into the mug you plan to drink from",
                "Pour the espresso shot into the mug with water"
            ]
        },

    "latte":
        {
            "desc": "Latte is a delicious coffee drink made with espresso or strong coffee and steamed milk, with sweet, mellow flavor",
            "equip": ["6-8oz wide, shallow coffee cup", "jar with lid", "(optional) espresso machine"],
            "ingredients": ["2oz of strongly brewed coffee or espresso", "4-5oz of nonfat or 2% milk  milk", "(optional) cocoa powder, to garnish", "(optional) flavored syrup"],
            "steps": ["Pull about 2oz of your strongly brewed coffee not diluted with any water or espresso shot in your latte cup",
                "Pour 4-5oz milk into the jar. Fill no more than halfway. If you want a sweetened or flavored latte, stir in some syrup with the warm milk, before adding the foam",
                "Screw the lid on tightly, and shake the jar as hard as you can until the milk is frothy and has roughly doubled in volume, 30 to 60 seconds",
                "Take the lid off the jar and microwave uncovered for 30 seconds. The foam will rise to the top of the milk and the heat from the microwave will help stabilize it",
                "Pour the espresso or coffee into a wide, shallow coffee cup. Use a large spoon to hold back the milk foam, and pour as much warm milk as you would like into the espresso",
                "Spoon as much milk foam as you would like onto your latte (or perhaps it's a cappuccino at this point!). Garnish, if desired, with a sprinkle of cocoa powder or nutmeg on top of the foam. Sip immediately!"
            ]
        },

    "cappuccino":
        {
            "desc": "Cappuccino is similar to latte, but with the layers more distinct, the coffee flavor stronger, less milk but the layer of foamed milk thicker. It is made from espresso or strong coffee and steamed milk",
            "equip": ["6-8oz wide, shallow coffee cup", "Jar with lid", "(optional) espresso machine"],
            "ingredients": ["around 3oz of strongly brewed coffee or espresso", "3 of nonfat or 2% milk  milk", "(optional) cocoa powder, to garnish", "(optional)cinnamon"],
            "steps": ["Pull about 3oz of your strongly brewed coffee not diluted with any water or espresso in your latte cup",
                "Pour 3z milk into the jar. Fill no more than halfway. If you want a sweetened or flavored latte, stir in some syrup with the warm milk, before adding the foam",
                "Screw the lid on tightly, and shake the jar as hard as you can until the milk is frothy and has roughly doubled in volume, 30 to 60 seconds",
                "Take the lid off the jar and microwave uncovered for 30 seconds. The foam will rise to the top of the milk and the heat from the microwave will help stabilize it",
                "Pour the espresso or coffee into a wide, shallow coffee cup. Use a large spoon to hold back the milk foam, and pour warm milk as you would like into the espresso",
                "Spoon as much milk foam as you would like onto your cappuccino. Garnish, if desired, with a sprinkle of cocoa powder or cinnamon!"
            ]
        },

    "expresso":
        {
            "desc": "Espresso is coffee brewed by expressing or forcing a small amount of nearly boiling water under pressure through finely ground coffee beans. Espresso is generally thicker than coffee brewed by other methods, has a strong flavor, higher concentration of suspended and dissolved solids, and has crema on top.",
            "equip": ["2oz coffee cup", "espresso machine"],
            "ingredients": ["ground coffee of your choice"],
            "steps": ["Place ground coffee in the filter of a drip coffeemaker",
                "Add water and brew according to manufacturer's instructions",
                "Serve immediately in espresso cups with lemon twists if desired"]
        },

    "irish":
        {
            "desc": "Irish coffee is a delicious drink consisting of hot coffee, Irish whiskey, and sugar, stirred, and topped with thick cream. The coffee is drunk through the cream.",
            "equip": ["6-9oz glass of your choice"],
            "ingredients": ["one 5-6oz cup freshly brewed, not too strong coffee", "1 and a half oz of whiskey", "brown sugar", "ice cream"],
            "steps": ["Fill footed mug or a mug with hot water to preheat it, then empty",
                "Pour piping hot coffee into warmed glass until it is about 3/4 full",
                "Add the brown sugar and stir until completely dissolved",
                "Blend in Irish whiskey",
                "Top with a collar of the whipped heavy cream by pouring gently over back of spoon",
                "Serve hot"]
        },

    "macchiato":
        {
            "desc": "Macchiato is an espresso coffee drink with a small amount of milk, usually foamed. Caramel Macchiato is one the most interesting coffee drinks",
            "equip": ["3-4oz glass of your choice", "1-quart microwave-safe bowl"],
            "ingredients": ["freshly ground espresso", "Cold milk", "Vanilla syrup", "Caramel syrup"],
            "steps": ["Brew one shot of fresh espresso  with espresso machine",
                "Pour milk into 1-quart microwave-safe bowl. Microwave on HIGH 1 to 1 1/2 minutes or until hot but not boiling",
                "Microwave vanilla syrup in microwave-safe coffee cup on HIGH 20 seconds to warm",
                "Add syrup to coffee",
                "Add steamed milk. Top with foamed milk",
                "Drizzle with caramel sundae syrup. Serve immediately"]
        },

    "black":
        {
            "desc": "Black coffee is is the best way to wake up in the winter mornings. One of the easiest recipes, black coffee has many known health benefits and will make you feel like a million bucks",
            "equip": ["cup or glass of your liking"],
            "ingredients": ["instant coffee powder - 1 teas spoon or more"],
            "steps": ["Add coffee powder and sugar in a mug",
                "Pour the boiling water and stir. Your black coffee is ready"]
        },

    "white":
        {
            "desc": "White coffee is basically a shot of coffee with steamed milk. Sometimes it can have a small amount of foam at the top",
            "equip": ["3-6oz glass of your choice"],
            "ingredients": ["instant coffee", "cold milk", "(optional)espresso machine"],
            "steps": ["Prepare an espresso by dissolving one teaspoon of instant coffee in one shot of very hot water or make a shot in espresso machine",
                "Gently heat a cup of milk in the microwave or on the stove top. To make it a little velvety, you can use a milk whisk (but avoid breaking the surface of the milk) or shake it in a sealed jar or bottle",
                "Pour the shot of coffee into the milk and serve immediately"]
        },

    "vienna":
        {
            "desc": "Vienna is a very special coffee. Dress it up with chocolate, whipped cream and more, making it a drink to savor",
            "equip": ["9-10oz glass of your choice", "1-1/2-quart pot", "(optional)espresso machine"],
            "ingredients": ["3-6oz of freshly ground espresso or instant coffee", "3 tablespoons chocolate syrup", "1oz of heavy whipping cream", "1oz pf cup creme de cacao or Irish cream liqueur", "(optional)Whipped cream and chocolate curls"],
            "steps": ["In a 1-1/2-qt. slow cooker, combine the coffee, chocolate syrup and sugar",
                "Cover and cook on low for 2-1/2 hours",
                "Stir in heavy cream and creme de cacao",
                "Cover and cook 30 minutes longer or until heated through",
                "Ladle coffee into mugs",
                "Garnish with whipped cream and chocolate curls if desired"]
        }
};


var COFFEE_TYPES = ["Black", "White", "Irish", "Americano", "Latte", "Cappuccino", "Vienna", "Espresso", "Macchiato"];

for (var i = 0; i < COFFEE_TYPES.length; i++) {
    COFFEE_TYPES[i] = COFFEE_TYPES[i] + "~" + COFFEE_TYPES[i];
}
COFFEE_TYPES = COFFEE_TYPES.join('|');

var whatCoffee = context(() => {
    follow(`(let's|) (try|make|cook|select|choice|choose|prepare|) $(T~ ${COFFEE_TYPES})`,
        p => {
            var coffee = p.T.label;
            coffeeSelected(p, coffee);
            p.then(selected, {coffee: coffee});
        });
    follow(`list (all|) (available|possible) (variants|options|) (coffee|)`,
        p => {
            let coffeeList = Object.keys(steps).join(', ');
            p.play('I can (cook|brew|make|prepare) ' + coffeeList);
            p.play("What is your choice?", "What coffee do you want to (make|brew|prepare)?");
        });
});


var selected = context(() => {
    follow("(Let's) (new|other|another|different) (coffee|)",
        p => {
            p.play("Let's (make|brew|prepare) something else");
            p.then(begin);
        });

    follow("(show|tell|what|) (are|) ingredients",
        p => {
            getIngredients(p, p.coffee);
        });


    follow("What equipment (do|will|are|) (I need|necessary|required)`,`(show|tell|what|) (me|) equipment",
        p => {
            getEquipment(p, p.coffee);

        });

    follow("(give|show|describe|what) (the|) (description)",
        p => {
            p.play(steps[p.coffee].desc);
        });

    follow("what coffee (we|I) (making|preparing|cooking)",
        p => {
            p.play(p.coffee + " coffee");
        });

    follow("(tell|show|show) (me|) (what are|) (the|) (instructions|steps)", "(let's|) (how to|) (try|cook|brew|make|prepare|do) (it|)",
        p => {
            getInstructions(p, p.coffee, 0);
            p.then(question, {coffee: p.coffee, step: 0});
        });
});

var suggest_question = context(() => {
    title("Question");
    follow("(yes|sure|begin|ok|start|good|go|ready|let's go|agree|try)",
        p => {
            coffeeSelected(p, p.coffee);
            p.then(selected, {coffee: p.coffee});
        });


    follow("(no|another|something else|I do not like|never|select another|)",
        p => {
            p.play("Let's (make|brew|prepare) something else");
            var coffee;
            do {
                coffee = rand(Object.keys(steps));
            } while (p.coffee === coffee);

            p.play(`(I would recommend to|I offer to|Let's|Why not to) (try|cook|brew|make|prepare) ${coffee}`);
            p.then(suggest_question, {coffee: coffee, step: 0});
        });
})

var question = context(() => {
    title("Question");

    follow("(proceed|) (to|) (next|ok) (step|) (continue|)",
        p => {
            let last = steps[p.coffee].steps.length - 1;
            let step = p.step === last ? p.step : p.step + 1;
            if (step === last + 1) {
                p.play("This was the final step");
            } else {
                getInstructions(p, p.coffee, step);
            }
            p.then(question, {coffee: p.coffee, step: step});

        });

    follow("(proceed|) (to|) (previous) (step|) (back|)",
        p => {
            let step = p.step <= 0 ? p.step : p.step - 1;
            if (step === 0) {
                p.play("This is the first step");
            }
            getInstructions(p, p.coffee, step);
            p.then(question, {coffee: p.coffee, step: step});
        });

    follow("(Can you|) repeat (please|)", "(please|) (what is|repeat|say) (last|current) (step|) (again|)",
        p => {
            getInstructions(p, p.coffee, p.step);
            p.then(question, {coffee: p.coffee, step: p.step});
        });

    follow("(go to|) (final|last|) (step|)",
        p => {
            let step = steps[p.coffee].steps.length - 1;
            getInstructions(p, p.coffee, step);
            p.then(question, {coffee: p.coffee, step: step});
        });
    follow("(go to|from|) (first|initial|beginning) (step|)",
        p => {
            let step = 0;
            getInstructions(p, p.coffee, step);
            p.then(question, {coffee: p.coffee, step: step});
        });

    follow("(go to|continue |) (from|) step $(NUMBER)",
        p => {
            let step = p.NUMBER.value - 1;
            getInstructions(p, p.coffee, step);
            p.then(question, {coffee: p.coffee, step: step});
        });

    follow("(finish|stop|bye)",
        p => {
            p.play("OK! (try|cook|brew|make|prepare) one more cup of coffee or come back for it later!");
            p.then(begin);
        });

    follow("(Let's) (new|other|another|different) (coffee|)",
        p => {
            p.play("Let's (make|brew|prepare) something else");
            p.then(begin);
        });

    follow("(show|tell|what|) (are|) ingredients",
        p => {
            getIngredients(p, p.coffee);
        });


    follow("What equipment (do|will|are|) (I need|necessary|required)`,`(show|tell|what|) (me|) equipment",
        p => {
            getEquipment(p, p.coffee);
        });


    follow("(show|show me|what) (the|) (description)", "what coffee (we|I) (making|preparing|cooking)",
        p => {
            p.play(p.coffee + " coffee");
        });

    follow("(show|show me|what) (the|) (instructions|steps)", "(let's|) (how to|) (try|cook|brew|make|prepare|do) (it|)",
        p => {
            getInstructions(p, p.coffee, 0);
            p.then(question, {coffee: p.coffee, step: 0});
        });


});

function coffeeSelected(p, coffee) {
    p.play(`(OK|Excellent choice), let's (cook|brew|make|prepare) ${coffee} coffee`);
    p.play(`I can (give|tell) you brief description of ${coffee} coffee and it's ingredients, provide you with steps to (cook|brew|make|prepare) it and what equipment (is required|you will need). Please, ask.`);

}

function getCoffee(p) {
    if (p.coffee) {
        return Promise.resolve(p.coffee);
    }
    p.play("What coffee do you want to (make|brew|prepare)?", "What coffee do you want to (brew|make|prepare)?", "What coffee do you (like|prefer)?");
    return p.then(whatCoffee);
}

intent(`(show|tell|what|) (me|) (how to|) ingredients`,
    async p => {
        if (!p.coffee) {
            p.coffee = await getCoffee(p);
        }
        getIngredients(p, p.coffee);
    })


intent(`(show|tell|show|explain|) (me|) (how to|) (cook|brew|make|prepare) coffee`, `(i want to|let|let's|lets) (cook|brew|make|prepare) coffee`,
    async p => {
        if (!p.coffee) {
            p.coffee = await getCoffee(p);
        }
        getInstructions(p, p.coffee, 0);

    })

intent(`(show|tell|show|explain|) (me|) (how to|) (cook|brew|make|prepare) $(T~ ${COFFEE_TYPES})`,
    async p => {
        var coffee = p.T.label;
        if (p.T.label === undefined) {
            coffee = await getCoffee(p);
        }
        coffeeSelected(p, coffee);
        p.then(selected, {coffee: coffee});
    })


intent(`what (is|are|) (the|) (best|most popular|good) (coffee|type|recipe|)`, `what (recipe|receipt) (can|may|) (you|) (suggest|propose)`, `what (coffee|recipe) do you (prefer|advise)`, `(don't|) (know|) suggest (sth|something|)`, `(suggest|propose) (me|us|) (some|) coffee (recipe|)`,
    p => {
        var coffee = rand(Object.keys(steps));
        p.play(`(I would prefer|I like|I prefer|My favorite is) ${coffee} coffee`);
        p.play("Would you like to (try|cook|brew|make|prepare) it?");
        p.then(suggest_question, {coffee: coffee});
    })

intent(`(list|tell|what) (all|possible|) (options|variants|) (of|) (coffee|) (sorts|type)`,
    `(tell|say|what) coffee (can|) (you|I) (cook|brew|make|prepare)`,
    p => {
        let coffeeList = Object.keys(steps).join(', ');
        p.play('I can (cook|brew|make|prepare) ' + coffeeList);
        p.play("What is your choice?", "What coffee do you want to (make|brew|prepare)?");
        p.then(whatCoffee);
    })

intent(`How to (cook|brew|make|prepare) $(T~ ${COFFEE_TYPES})`,
    p => {
        p.play(p.T.label);
        let coffeeList = Object.keys(steps).join(', ');
        p.play('I can (cook|brew|make|prepare) ' + coffeeList);
        p.play("What is your choice?", "What coffee do you want to (make|brew|prepare)?");
        p.then(whatCoffee);
    })

var begin = context(() => {

    follow(`(show|tell|show|explain) (me|) (how to|) (cook|brew|make|prepare) (another|) coffee`, `(i want to|let|let's|lets) (cook|brew|make|prepare) coffee`,
        async p => {
            p.coffee = await getCoffee(p);
            getInstructions(p, p.coffee, 0);
        })
})


function getInstructions(p, coffee, step) {
    if (coffee === undefined) {
        p.play("please select proper coffee type", "please check spelling", "maybe you meant something else?")
        p.then(whatCoffee);
    }
    var numberSteps = steps[coffee].steps.length;

    if (!step) {
        step = 0;
    }
    if (step === numberSteps - 1) {
        p.play("This is the final step " + (step + 1));
    } else {
        p.play("STEP " + (step + 1));
    }
    p.play(steps[coffee].steps[step]);
}

function getIngredients(p, coffee) {
    if (coffee === undefined) {
        p.play("Please select proper coffee type");
        p.then(whatCoffee);
    }
    p.play(`You need following ingredients to (brew|prepare|cook|make) ${coffee} coffee`);
    p.play(steps[coffee].ingredients.join(', '));
}

function getEquipment(p, coffee) {
    if (coffee === undefined) {
        p.play("Please select coffee type");
        p.then(whatCoffee);
    }
    p.play(`You need following equipment to (brew|prepare|cook|make) ${coffee} coffee`);
    p.play(steps[coffee.toLowerCase()].equip.join(', '));
}

function rand(list) {
    var index = Math.floor(Math.random() * list.length);
    return list[index];
}
