import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SquareAccountDetails, PaymentsApi, CustomersApi,CreatePaymentRequest } from 'square';
import { AppModule } from './app/app.module';
import { payments, Card} from '@square/web-sdk';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
