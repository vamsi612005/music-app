function searchSong(search_term) {
    
    document.getElementById('search-box').value=search_term;
    var goButton = document.getElementById("search-trigger");
                goButton.click();
        
    }

    export default searchSong;