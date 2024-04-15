import { LinkDto } from '../dtos/link.dto';
import { PrimeIcons } from 'primeng/api';

export const linksConfig: LinkDto[] = [
  {
    label: 'Dashboard',
    link: 'dashboard',
    icon: PrimeIcons.HOME
  },
  {
    label: 'Tickets',
    link: 'tickets',
    icon: PrimeIcons.LIST
  },
  {
    label: 'Crew',
    link: 'crew',
    icon: PrimeIcons.USERS
  }
]
