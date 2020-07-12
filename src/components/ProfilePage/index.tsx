import React from 'react';

import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Lucas Vieira</h1>
        <h2>@LucasVieira</h2>

        <p>
          Developer at <a href="https://www.codeminer42.com/">@Codeminer42</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Paraná, Brazil
          </li>
          <li>
            <CakeIcon />
            Born on Septemper 19th 1996
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
