$(document).ready(function() {
    $('#artists').select();
});

function span_click(object){
    var array = object.id.split('_')
    // alert(array);
    var data = {}

    data['id'] = array[0]
    data['rating'] = array[1]


    var request = {
        "url" : `http://localhost:3000/api/songs/rating`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        // alert(response);
        location.reload();
    })
}


$("#add_user").submit(function(event){
    // alert("Data Inserted Successfully!");
})


$('#show').on('click', function () {
    $('.center').show();
    $(this).hide();
})

$('#close').on('click', function () {
    $('.center').hide();
    $('#show').show();
})


function create_artist_click(object){
    var array = object.id.split('_')
    // alert(array);
    var data = {}

    data['id'] = array[0]
    data['rating'] = array[1]


    var request = {
        "url" : `http://localhost:3000/api/songs/rating`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        // alert(response);
        location.reload();
    })
}

$("#create_artitst").click(function(e){
    var name = $('#create_artitst_form').find('input[name="artist_name"]').val();
    var DOB = $('#create_artitst_form').find('input[name="DOB"]').val();
    var desc = $('#create_artitst_form').find('input[name="desc"]').val(); 

    var data = {}

    data['name'] = name;
    data['DOB'] = DOB;
    data['desc'] = desc;
    
    var request = {
        "url" : `http://localhost:3000/api/artists`,
        "method" : "POST",
        "data" : data
    }

    $.ajax(request).done(function(response){
        $('#close').click();
        // location.reload();
        $('#artists').append(`<option value="${response._id}">${response.name}</option>`);
        $("#artists").selectpicker('refresh');
    })
});

$("#test").click(function(e){
    alert("Here!!!");
    var o = new Option("Temporary", "value");
    $(o).html("Temporary");
    $('#artists').append(o);
});

// $("#update_user").submit(function(event){
//     event.preventDefault();

//     var unindexed_array = $(this).serializeArray();
//     var data = {}

//     $.map(unindexed_array, function(n, i){
//         data[n['name']] = n['value']
//     })


//     var request = {
//         "url" : `http://localhost:3000/api/users/${data.id}`,
//         "method" : "PUT",
//         "data" : data
//     }

//     $.ajax(request).done(function(response){
//         alert("Data Updated Successfully!");
//     })

// })

// if(window.location.pathname == "/"){
//     $ondelete = $(".table tbody td a.delete");
//     $ondelete.click(function(){
//         var id = $(this).attr("data-id")

//         var request = {
//             "url" : `http://localhost:3000/api/users/${id}`,
//             "method" : "DELETE"
//         }

//         if(confirm("Do you really want to delete this record?")){
//             $.ajax(request).done(function(response){
//                 alert("Data Deleted Successfully!");
//                 location.reload();
//             })
//         }

//     })
// }