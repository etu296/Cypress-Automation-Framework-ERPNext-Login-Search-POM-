class SearchBar {
    search(searchContent) {
    cy.get('#navbar-search')
    .type(searchContent)
    .type('{enter}');
}

}
export default SearchBar;