import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiHeart,
  FiUser,
  FiBookOpen,
  FiUsers,
  FiBookmark,
  FiFilm,
  FiBook,
} from 'react-icons/fi';

import logoMarvel from '../../assets/MarvelLogo1.svg';

import { Container, DevDiv } from './styled';

const Header: React.FC = () => (
  <Container>
    <img src={logoMarvel} alt="Marvel" />

    <div>
      <Link to="/characters">
        <FiUser />
        Characters
      </Link>

      <Link to="/comics">
        <FiBookOpen />
        Comics
      </Link>

      <Link to="/creators">
        <FiUsers />
        Creators
      </Link>

      <Link to="/events">
        <FiBookmark />
        Events
      </Link>

      <Link to="/series">
        <FiFilm />
        Series
      </Link>

      <Link to="/stories">
        <FiBook />
        Stories
      </Link>

    </div>
  </Container>
);

export default Header;
