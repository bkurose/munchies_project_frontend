import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';

function SearchBar ({ updateSearchQuery }) {
    const history = useHistory();
    const [ searchQueryControl, setSearchQueryControl ] = useState("")

    function handleSearchChange(event) {
        setSearchQueryControl(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        updateSearchQuery(searchQueryControl)
        history.push("/search")         
    }

    return (
        <Form id="searchBar" onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} className="mb-3" controlId="searchForm">
                    <Form.Control onChange={handleSearchChange} value={searchQueryControl} type="text" placeholder="Search for a restaurant..." />
                </Form.Group>
                <Form.Group as={Col} md="auto" className="mb-3" controlId="searchSubmit">
                    <Button class="searchButton" variant="primary" type="submit">
                        Search
                    </Button>
                </Form.Group>
            </Row>
      </Form>
    )
}

export default SearchBar;