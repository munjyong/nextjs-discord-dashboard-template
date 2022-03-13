import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

const Header = () => {
    console.log('header');

    return (
        <Container>
            <Menu stackable>
                <Menu.Item>
                    <img src='/discord.svg' />
                </Menu.Item>
                <Menu.Item>Features</Menu.Item>
                <Menu.Item>Testimonials</Menu.Item>
                <Menu.Item>Sign-in</Menu.Item>
            </Menu>
        </Container>
    );
};

export default Header;
