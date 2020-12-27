import React, { useState } from 'react';
import 'rsuite/dist/styles/rsuite-dark.css';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './features/todos/todoSlice';
import Todos from './features/todos/Todo';
import Posts from './features/posts/Post';

import {
  Button,
  Container,
  Header,
  Navbar,
  Content,
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Divider,
} from 'rsuite';
import './App.css';

function App() {
  const [todoTxt, setTodoTxt] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="main">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
              <p className="navbar-brand">Redux React TODO</p>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Add ToDo</h3>} bordered>
                <Form fluid>
                  <FormGroup>
                    <ControlLabel>What you want to do?</ControlLabel>
                    <FormControl
                      name="task"
                      value={todoTxt}
                      onChange={setTodoTxt}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button
                        appearance="primary"
                        onClick={() => {
                          dispatch(
                            add({ txt: todoTxt, id: Date.now().toString() })
                          );
                          setTodoTxt('');
                        }}
                      >
                        Create
                      </Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
              <Divider />
              <Todos />
              <Posts />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
}

export default App;
