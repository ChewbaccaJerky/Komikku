# Component Hierarchy

## Functional Component Hierarchy

- `Root`
    - `App`
        - `Header`
        - `Navbar`
        - `MainPage`

## Header
### Components 
- `SessionButtonContainer`
    - `SessionButton`
### State 
- `session`

## Navbar
### Components 
- `NavbarContainer`
    - `Navbar`
        - `NavbarItem`
### State 
- none

## Header
### Components
- `HeaderContainer`
    - `Header`
        - `Title`
### State
- `session`

## MangaIndexContainer
### Components
- `MangaIndexContainer`
    - `MangaIndex`
        - `MangaIndexItem`
    - `LoadButton`
### State
- `manga`
- `session`
### Routes
- `/#/`
- `/#/favorites`
- `/#/search/:search_params`
- `/#/category/:category`

## SearchBarContainer
### Components
- `SearchBarContainer`
    - `SearchBar`
    - `SearchButton`

### State
- none

## MangaDetailContainer
### Components
- `MangaDetailContainer`
    - `MangaInfo`
    - `CategoryContainer`
        - `CategoryTab`
    - `TitleContainer`

### State
- `session`
- `chapter`

### Route
- `/#/manga/:id`

## ReaderContainer
### Components
- `ReaderContainer`
    - `Reader`
    - `ReaderNavigation`
    - `PagesContainer`
        - `PagesIndex`
            - `PagesIndexItem`

### State
- `session`
- `pages`




