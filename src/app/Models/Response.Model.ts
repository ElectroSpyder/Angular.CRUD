import { CuentaDTO } from "./CuentaDTO.Model";

export interface Response {
     StatudCode : boolean;
     Message : string;     
     Result: CuentaDTO;    
     ResultList : Array<CuentaDTO>;
}