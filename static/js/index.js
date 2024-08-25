$(document).ready(()=>{

    $("form#wires input[name=numWires]").on("change",()=>{
        $("form#wires .selectContainer").empty()
        let numWires = $("input[name='numWires']:checked").val()
        for (let i = 0; i < numWires; i++) {
            $("form#wires .selectContainer").append(`
                                <span>
                                    Wire #${i+1}
                                </span>
                                <select name="wire${i+1}" >
									<option value="yellow">Yellow</option>
									<option value="red">Red</option>
									<option value="blue">Blue</option>
									<option value="black">Black</option>
									<option value="white">White</option>
								</select>
            `)
        }
    });

    $("form#wires").on("submit",()=>{
        
    });
    $("form#button").on("submit",()=>{});
    $("form#symbols").on("submit",()=>{});
    $("form#simon").on("submit",()=>{});
    $("form#first").on("submit",()=>{});
    $("form#memory").on("submit",()=>{});
    $("form#morse").on("submit",()=>{});
    $("form#complex").on("submit",()=>{});
    $("form#sequence").on("submit",()=>{});
    $("form#maze").on("submit",()=>{});
    $("form#password").on("submit",()=>{});
});