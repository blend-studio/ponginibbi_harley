/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7801429Z
 * Questo file è stato generato automaticamente.
 */

#nullable enable

#pragma warning disable IDE0079
#pragma warning disable CS8618
#pragma warning disable IDE0005

using System;
using System.Collections.Generic;

namespace PublisherModels;

/// <summary>
/// Dati principali riguardanti il veicolo
/// </summary>
public class Vehicles_Public
{
	/// <summary>
	/// Colore esterni
	/// </summary>
	public string BodyColor { get; set; }

	/// <summary>
	/// Vernice esterna metallizzata
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-11-27</para>
	/// </remarks>
	public bool? BodyColorMetallic { get; set; }

	/// <summary>
	/// Tipo carrozzeria
	/// </summary>
	public string? BodyType { get; set; }

	/// <summary>
	/// Descrizione della marca
	/// </summary>
	public string Brand { get; set; }

	/// <summary>
	/// Codice Eurotax della marca di questo veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-10-25</para>
	/// </remarks>
	public string? BrandEurotax { get; set; }

	/// <summary>
	/// Codice Infocar per la marca
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-10-25</para>
	/// </remarks>
	public string? BrandInfocar { get; set; }

	/// <summary>
	/// Data di scadenza del bollo
	/// </summary>
	public DateTime? CarTaxExpiryDate { get; set; }

	/// <summary>
	/// Prezzo del veicolo nuovo equivalente, IVA esclusa
	/// </summary>
	public double? ComparedPrice { get; set; }

	/// <summary>
	/// Indica se il veicolo è incidentato
	/// </summary>
	public bool? Damaged { get; set; }

	/// <summary>
	/// Sede di competenza del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-09-05</para>
	/// </remarks>
	public string DealershipVenue { get; set; }

	/// <summary>
	/// Indirizzo della sede di competenza del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-09-05</para>
	/// </remarks>
	public string? DealershipVenueAddress { get; set; }

	/// <summary>
	/// CAP della sede di competenza del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-09-05</para>
	/// </remarks>
	public string? DealershipVenuePostalCode { get; set; }

	/// <summary>
	/// Codice di provincia della sede di competenza del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-09-05</para>
	/// </remarks>
	public string? DealershipVenueProvinceCode { get; set; }

	/// <summary>
	/// Nome del comune della sede di competenza del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-09-05</para>
	/// </remarks>
	public string? DealershipVenueTown { get; set; }

	/// <summary>
	/// Cilindrata
	/// </summary>
	public int? Displacement { get; set; }

	/// <summary>
	/// Numero porte
	/// </summary>
	public int? DoorsCount { get; set; }

	/// <summary>
	/// Descrizione motore
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? Engine { get; set; }

	/// <summary>
	/// Condizione del veicolo
	/// </summary>
	/// <remarks>
	/// <para>Stato calcolato automaticamente, che tiene in considerazione numerose variabili relative al veicolo.</para>
	/// <para>Valori noti: marketable_virtual, marketable_assigned, marketable_stock, unmarketable, booked_virtual, booked_assigned, booked_stock, booked_tradein, booked_custom, booked_required, unavailable, opencontract_virtual, opencontract_assigned, opencontract_stock, opencontract_tradein, opencontract_custom, opencontract_required, transitional_required, transitional_custom, transitional_virtual, transitional_tradein, transitional_other, sold</para>
	/// </remarks>
	/// <seealso cref="Saleable"/>
	/// <seealso cref="Status"/>
	public string ExtendedStatus { get; set; }

	/// <summary>
	/// Famiglia
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? Family { get; set; }

	/// <summary>
	/// Tipo alimentazione
	/// </summary>
	public string? FuelType { get; set; }

	/// <summary>
	/// Altezza del veicolo
	/// </summary>
	/// <remarks>
	/// <para>Campo di testo libero.</para>
	/// </remarks>
	public string? Height { get; set; }

	/// <summary>
	/// Omologazione del veicolo
	/// </summary>
	public string? Homologation { get; set; }

	/// <summary>
	/// Colore interni
	/// </summary>
	public string InteriorsColor { get; set; }

	/// <summary>
	/// Descrizione interni (1)
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? InteriorsLabel1 { get; set; }

	/// <summary>
	/// Descrizione interni (2)
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? InteriorsLabel2 { get; set; }

	/// <summary>
	/// Descrizione interni (3)
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? InteriorsLabel3 { get; set; }

	/// <summary>
	/// Descrizione interni (4)
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? InteriorsLabel4 { get; set; }

	/// <summary>
	/// Descrizione interni (5)
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? InteriorsLabel5 { get; set; }

	/// <summary>
	/// Note associate al veicolo, ad uso interno
	/// </summary>
	public string? InternalNotes { get; set; }

	/// <summary>
	/// Veicolo a uso interno del dealer
	/// </summary>
	/// <remarks>
	/// <para>Indica se la vettura è destinata ad uso interno del dealer.</para>
	/// <para>Ha senso solo per i veicoli aziendali.</para>
	/// </remarks>
	public bool? InternalUseByDealer { get; set; }

	/// <summary>
	/// Veicolo commerciale
	/// </summary>
	/// <remarks>
	/// <para>Indica se questo è un veicolo commerciale</para>
	/// </remarks>
	public bool IsCommercialVehicle { get; set; }

	/// <summary>
	/// Offerta speciale
	/// </summary>
	/// <remarks>
	/// <para>Indica se questo veicolo è in offerta.</para>
	/// </remarks>
	public bool? IsSpecialOffer { get; set; }

	/// <summary>
	/// Descrizione del veicolo
	/// </summary>
	/// <remarks>
	/// <para>Descrizione di questo veicolo in particolare, più specifica della descrizione della versione.</para>
	/// </remarks>
	/// <seealso cref="Version"/>
	/// <seealso cref="Model"/>
	/// <seealso cref="Brand"/>
	public string? Label { get; set; }

	/// <summary>
	/// Data dell'ultima revisione
	/// </summary>
	public DateTime? LastInspectionDate { get; set; }

	/// <summary>
	/// Lunghezza del veicolo
	/// </summary>
	/// <remarks>
	/// <para>Campo di testo libero.</para>
	/// </remarks>
	public string? Length { get; set; }

	/// <summary>
	/// Linea del veicolo
	/// </summary>
	public string? Line { get; set; }

	/// <summary>
	/// Categoria della linea del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? LineCategory { get; set; }

	/// <summary>
	/// Sottocategoria della linea del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? LineSubcategory { get; set; }

	/// <summary>
	/// Ubicazione del veicolo
	/// </summary>
	public string? Location { get; set; }

	/// <summary>
	/// Massa del veicolo
	/// </summary>
	public double? Mass { get; set; }

	/// <summary>
	/// Portata
	/// </summary>
	public double? MaxLoadCapacity { get; set; }

	/// <summary>
	/// Chilometraggio
	/// </summary>
	public int? MileageKm { get; set; }

	/// <summary>
	/// Descrizione del modello
	/// </summary>
	public string? Model { get; set; }

	/// <summary>
	/// Codice Eurotax del modello di questo veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-10-25</para>
	/// </remarks>
	public string? ModelEurotax { get; set; }

	/// <summary>
	/// Codice Infocar per il modello
	/// </summary>
	/// <remarks>
	/// <para>ModelInfocarCode nell'usato non è nullable</para>
	/// <para>A partire da: 2019-10-25</para>
	/// </remarks>
	public string? ModelInfocar { get; set; }

	/// <summary>
	/// Adatto per neopatentati
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2021-03-26</para>
	/// </remarks>
	public bool? NewDriver { get; set; }

	/// <summary>
	/// Note associate al veicolo
	/// </summary>
	public string? Notes { get; set; }

	/// <summary>
	/// Numero di proprietari
	/// </summary>
	/// <remarks>
	/// <para>Numero totale di proprietari che questo veicolo ha avuto durante la propria vita.</para>
	/// </remarks>
	public int? OwnersCount { get; set; }

	/// <summary>
	/// Targa del veicolo
	/// </summary>
	public string? Plate { get; set; }

	/// <summary>
	/// Potenza (CV)
	/// </summary>
	public int? PowerHp { get; set; }

	/// <summary>
	/// Potenza (KW)
	/// </summary>
	public int? PowerKw { get; set; }

	/// <summary>
	/// Pubblica sul web
	/// </summary>
	/// <remarks>
	/// <para>Rispecchia il valore del flag "Pubblica sul web" impostato sul DMS.</para>
	/// </remarks>
	public bool? PublishOnline { get; set; }

	/// <summary>
	/// Data di immatricolazione
	/// </summary>
	public DateTime? RegistrationDate { get; set; }

	/// <summary>
	/// Vendibile
	/// </summary>
	/// <remarks>
	/// <para>Rispecchia il valore del flag "Vendibile" impostato sul DMS.</para>
	/// </remarks>
	public bool? Saleable { get; set; }

	/// <summary>
	/// Numero posti
	/// </summary>
	public int? SeatsCount { get; set; }

	/// <summary>
	/// Segmento
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? Segment { get; set; }

	/// <summary>
	/// Descrizione della serie
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-05-23</para>
	/// </remarks>
	public string? Series { get; set; }

	/// <summary>
	/// Prezzo per i privati
	/// </summary>
	/// <remarks>
	/// <para>Per i veicoli nuovi e usati, il prezzo è comprensivo di IVA. Per i veicoli aziendali, dipende dalla configurazione del gestionale.</para>
	/// </remarks>
	public double? ShowroomPrice { get; set; }

	/// <summary>
	/// Stato veicolo
	/// </summary>
	/// <remarks>
	/// <para>Rispecchia il valore del campo "Stato" del DMS.</para>
	/// <para>Valori noti: Ordinato, Virtuale, Assegnato, In stock, Venduto, Da ritirare, Uscito, Richiesto, Stornato, Altro</para>
	/// </remarks>
	public string? Status { get; set; }

	/// <summary>
	/// Tipologia stock
	/// </summary>
	/// <remarks>
	/// <para>Lo stock di provenienza di questo veicolo.</para>
	/// <para>Valori noti: Nuovo, Usato, Aziendale</para>
	/// </remarks>
	public string StockType { get; set; }

	/// <summary>
	/// Tipo gomme
	/// </summary>
	public string? TiresType { get; set; }

	/// <summary>
	/// Tipo trazione
	/// </summary>
	public string? TractionType { get; set; }

	/// <summary>
	/// Prezzo chiavi in mano
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2021-05-10</para>
	/// </remarks>
	public double? TurnkeyPrice { get; set; }

	/// <summary>
	/// Tipologia di veicolo
	/// </summary>
	public string? Type { get; set; }

	/// <summary>
	/// Sede legata all'ubicazione del veicolo
	/// </summary>
	public string? Venue { get; set; }

	/// <summary>
	/// Indirizzo della sede legata all'ubicazione del veicolo
	/// </summary>
	public string? VenueAddress { get; set; }

	/// <summary>
	/// CAP della sede legata all'ubicazione del veicolo
	/// </summary>
	public string? VenuePostalCode { get; set; }

	/// <summary>
	/// Codice di provincia della sede legata all'ubicazione del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-01-06</para>
	/// </remarks>
	public string? VenueProvinceCode { get; set; }

	/// <summary>
	/// Nome del comune della sede legata all'ubicazione del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-01-06</para>
	/// </remarks>
	public string? VenueTown { get; set; }

	/// <summary>
	/// Descrizione della versione
	/// </summary>
	public string Version { get; set; }

	/// <summary>
	/// Codice Eurotax della versione di questo veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-10-31</para>
	/// </remarks>
	public string? VersionEurotax { get; set; }

	/// <summary>
	/// Codice Infocar per la versione
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-10-25</para>
	/// </remarks>
	public string? VersionInfocar { get; set; }

	/// <summary>
	/// Numero di telaio
	/// </summary>
	public string? Vin { get; set; }

	/// <summary>
	/// Cartellino
	/// </summary>
	public string? VTag { get; set; }

	/// <summary>
	/// Descrizione garanzia
	/// </summary>
	public string? Warranty { get; set; }

	/// <summary>
	/// Mesi di validità della garanzia (carrozzeria)
	/// </summary>
	public int? WarrantyBodyMonths { get; set; }

	/// <summary>
	/// Data di fine validità della garanzia
	/// </summary>
	public DateTime? WarrantyEndDate { get; set; }

	/// <summary>
	/// Chilometri di validità della garanzia (meccanica)
	/// </summary>
	public int? WarrantyMechKm { get; set; }

	/// <summary>
	/// Mesi di validità della garanzia (meccanica)
	/// </summary>
	public int? WarrantyMechMonths { get; set; }

	/// <summary>
	/// Data di inizio validità della garanzia
	/// </summary>
	public DateTime? WarrantyStartDate { get; set; }

	/// <summary>
	/// Prezzo per il web
	/// </summary>
	public double? WebPrice { get; set; }

	/// <summary>
	/// Tipologia del prezzo per il web
	/// </summary>
	public string? WebPriceType { get; set; }

	/// <summary>
	/// Larghezza del veicolo
	/// </summary>
	/// <remarks>
	/// <para>Campo di testo libero.</para>
	/// </remarks>
	public string? Width { get; set; }
}
