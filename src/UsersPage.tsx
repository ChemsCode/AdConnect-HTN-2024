import React, { useState } from 'react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';  // Adjust the import path as necessary

const UsersPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [profilePic, setProfilePic] = useState<string>('');
  const [type, setType] = useState<'Creator' | 'Sponsor'>('Creator'); // "Creator" or "Sponsor"

  // Correctly access the addUser mutation
  const addUser = useMutation(api.users.addUser); 

  // Correctly access the getUsersByType query
  const users = useQuery(api.users.getUsersByType, { type });

  // Handle adding a user
  const handleAddUser = async () => {
    if (username && email && phoneNumber && bio && profilePic) {
      await addUser({
        username,
        email,
        phoneNumber,
        rating: 5, // Example hardcoded rating
        bio,
        profilePic,
        type,
        targetAudience: type === 'Creator' ? 'General Audience' : undefined,
        totalFollowing: type === 'Creator' ? 1000 : undefined,
        companyName: type === 'Sponsor' ? 'Company X' : undefined,
        industry: type === 'Sponsor' ? 'Tech' : undefined,
      });
      alert('User added successfully!');
      // Clear form fields
      setUsername('');
      setEmail('');
      setPhoneNumber('');
      setBio('');
      setProfilePic('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h1>Add a New {type}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddUser();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile Picture URL"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value as 'Creator' | 'Sponsor')}>
          <option value="Creator">Creator</option>
          <option value="Sponsor">Sponsor</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      <h2>{type}s List</h2>
      {users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id.toString()}>
              <strong>{user.username}</strong> - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No {type}s found.</p>
      )}
    </div>
  );
};

export default UsersPage;