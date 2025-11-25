import { ComponentProps } from 'react';
import Icon from '@react-native-vector-icons/material-design-icons';

interface Props {
  name: ComponentProps<typeof Icon>['name'];
  size?: number;
  color?: string;
}

export const MaterialIcon = ({ name, size = 25, color = 'black' }: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
