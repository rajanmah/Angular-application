import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { FlexLayoutModule } from '@angular/flex-layout';


const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
