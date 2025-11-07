import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return ctx;
};
//se ha de entender como un camarero, tipo le da a la "cocina" (el AuthProvider) una orden
//(login, logout) y el camarero se la lleva a la cocina y vuelve con la respuesta (user, token, funcion de login/logout)