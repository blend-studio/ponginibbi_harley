/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7799623Z
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
/// Dati relativi al commercio del veicolo
/// </summary>
public class Vehicles_Business
{
	/// <summary>
	/// Effettiva destinazione di vendita
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? ActualSaleTarget { get; set; }

	/// <summary>
	/// Data effettiva di arrivo del veicolo
	/// </summary>
	/// <seealso cref="ExpectedArrivalDate"/>
	public DateTime? ArrivalDate { get; set; }

	/// <summary>
	/// Prezzo base
	/// </summary>
	public double? BasePrice { get; set; }

	/// <summary>
	/// Prezzo base imponibile
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-04-09</para>
	/// </remarks>
	public double? BasePriceNet { get; set; }

	/// <summary>
	/// Codice dell'agente che ha prenotato il veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-10-25</para>
	/// </remarks>
	public string? BookerCode { get; set; }

	/// <summary>
	/// Id dell'anagrafica dell'agente che ha prenotato il veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-06-11</para>
	/// </remarks>
	public string? BookerId { get; set; }

	/// <summary>
	/// Data di scadenza della prenotazione
	/// </summary>
	/// <remarks>
	/// <para>Data di scadenza della prenotazione. Se il veicolo non è prenotato, questo campo è vuoto.</para>
	/// <para>A partire da: 2019-10-15</para>
	/// </remarks>
	public DateTime? BookingExpireDate { get; set; }

	/// <summary>
	/// Data di inizio della prenotazione
	/// </summary>
	/// <remarks>
	/// <para>Data di scadenza della prenotazione. Se il veicolo non è prenotato, questo campo è vuoto.</para>
	/// <para>A partire da: 2020-11-12</para>
	/// </remarks>
	public DateTime? BookingStartDate { get; set; }

	/// <summary>
	/// Prezzo per i salonisti
	/// </summary>
	public double? BusinessPrice { get; set; }

	/// <summary>
	/// Codice di conformità
	/// </summary>
	public string? ComplianceCode { get; set; }

	/// <summary>
	/// Data di conformità
	/// </summary>
	public DateTime? ComplianceDate { get; set; }

	/// <summary>
	/// Settimana di conferma
	/// </summary>
	/// <seealso cref="ExpectedDeliveryWeek"/>
	public int? ConfirmationWeek { get; set; }

	/// <summary>
	/// Numero contratto
	/// </summary>
	public int? ContractCode { get; set; }

	/// <summary>
	/// Data contratto
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2021-07-14</para>
	/// </remarks>
	public DateTime? ContractDate { get; set; }

	/// <summary>
	/// Data effettiva di consegna del veicolo
	/// </summary>
	/// <seealso cref="ExpectedDeliveryDate"/>
	public DateTime? DeliveryDate { get; set; }

	/// <summary>
	/// Data prevista di arrivo del veicolo
	/// </summary>
	/// <seealso cref="ArrivalDate"/>
	public DateTime? ExpectedArrivalDate { get; set; }

	/// <summary>
	/// Data prevista di consegna del veicolo
	/// </summary>
	/// <seealso cref="DeliveryDate"/>
	public DateTime? ExpectedDeliveryDate { get; set; }

	/// <summary>
	/// Settimana prevista di consegna del veicolo
	/// </summary>
	/// <seealso cref="ConfirmationWeek"/>
	public int? ExpectedDeliveryWeek { get; set; }

	/// <summary>
	/// Previsione della destinazione di vendita, dopo il ritiro
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? ExpectedSaleTarget { get; set; }

	/// <summary>
	/// Previsione della destinazione di vendita, prima del ritiro
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? ExpectedSaleTargetBeforePickup { get; set; }

	/// <summary>
	/// Codice di fabbrica
	/// </summary>
	public string? FactoryCode { get; set; }

	/// <summary>
	/// Veicolo in contratto
	/// </summary>
	/// <remarks>
	/// <para>Indica se il veicolo è abbinato ad un contratto aperto per il cliente finale.</para>
	/// <para>A partire da: 2019-10-15</para>
	/// </remarks>
	public bool HasContract { get; set; }

	/// <summary>
	/// IVA esposta
	/// </summary>
	public bool IsVatReclaimable { get; set; }

	/// <summary>
	/// Data di uscita del veicolo
	/// </summary>
	public DateTime? LeaveDate { get; set; }

	/// <summary>
	/// Prezzo minimo
	/// </summary>
	/// <remarks>
	/// <para>Valore minimo che il prezzo può assumere dopo le elaborazioni automatiche legate agli sconti.</para>
	/// <para>A partire da: 2019-11-27</para>
	/// </remarks>
	public double? MinimumPrice { get; set; }

	/// <summary>
	/// Numero di rate previste per il finanziamento
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-12-29</para>
	/// </remarks>
	public int? NumberOfInstallments { get; set; }

	/// <summary>
	/// Codice dell'ordine
	/// </summary>
	public string? OrderCode { get; set; }

	/// <summary>
	/// Stato dell'ordine
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-09-19</para>
	/// </remarks>
	public string? OrderStatus { get; set; }

	/// <summary>
	/// Provenienza
	/// </summary>
	public string? Origin { get; set; }

	/// <summary>
	/// Agente di ritiro
	/// </summary>
	public string? PickupAgent { get; set; }

	/// <summary>
	/// Luogo di ritiro
	/// </summary>
	public string? PickupLocation { get; set; }

	/// <summary>
	/// Tipologia di ritiro
	/// </summary>
	public string? PickupType { get; set; }

	/// <summary>
	/// Data validazione ritiro
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-04-26</para>
	/// </remarks>
	public DateTime? PickupValidationDate { get; set; }

	/// <summary>
	/// Valore di ritiro con IVA
	/// </summary>
	/// <remarks>
	/// <para>Valore stimato dal valutatore per il ritiro del veicolo, IVA inclusa</para>
	/// <para>A partire da: 2022-03-16</para>
	/// </remarks>
	/// <seealso cref="PickupValueNet"/>
	public double? PickupValue { get; set; }

	/// <summary>
	/// Valore di ritiro imponibile
	/// </summary>
	/// <remarks>
	/// <para>Valore stimato dal valutatore per il ritiro del veicolo, IVA esclusa</para>
	/// <para>A partire da: 2022-03-16</para>
	/// </remarks>
	/// <seealso cref="PickupValue"/>
	public double? PickupValueNet { get; set; }

	/// <summary>
	/// Data di produzione del veicolo
	/// </summary>
	public DateTime? ProductionDate { get; set; }

	/// <summary>
	/// Data di acquisto del veicolo
	/// </summary>
	/// <seealso cref="SellingDate"/>
	public DateTime? PurchaseDate { get; set; }

	/// <summary>
	/// Codice di sblocco dell'autoradio
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-10-17</para>
	/// </remarks>
	public string? RadioUnlockCode { get; set; }

	/// <summary>
	/// Prezzo stimato dallo strumento di valutazione (Infocar o Eurotax)
	/// </summary>
	public double? RatingToolPrice { get; set; }

	/// <summary>
	/// Stima delle spese di ripristino relative alla carrozzeria
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-11-11</para>
	/// </remarks>
	public double? RecoveryCostBody { get; set; }

	/// <summary>
	/// Stima delle spese fisse di ripristino
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-11-11</para>
	/// </remarks>
	public double? RecoveryCostFixed { get; set; }

	/// <summary>
	/// Stima delle spese di ripristino relative alla meccanica
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-11-11</para>
	/// </remarks>
	public double? RecoveryCostMech { get; set; }

	/// <summary>
	/// Stima delle spese varie di ripristino
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-11-11</para>
	/// </remarks>
	public double? RecoveryCostMisc { get; set; }

	/// <summary>
	/// Stima delle spese di ripristino complessive
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-11-11</para>
	/// </remarks>
	public double RecoveryCostTotal { get; set; }

	/// <summary>
	/// Previsione della destinazione di vendita (dopo il ritiro)
	/// </summary>
	[Obsolete("Il significato di questo campo è errato per alcune tipologie di veicolo. Usare i nuovi campi: ActualSaleTarget, ExpectedSaleTarget e ExpectedSaleTargetBeforePickup")]
	public string? SaleTarget { get; set; }

	/// <summary>
	/// Previsione della destinazione di vendita, prima del ritiro
	/// </summary>
	[Obsolete("Il significato di questo campo è errato per alcune tipologie di veicolo. Usare i nuovi campi: ActualSaleTarget, ExpectedSaleTarget e ExpectedSaleTargetBeforePickup")]
	public string? SaleTargetBeforePickup { get; set; }

	/// <summary>
	/// Tipologia di destinazione vendita
	/// </summary>
	public string? SaleTargetType { get; set; }

	/// <summary>
	/// Premio destinato all'agente che ha venduto il veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-12-20</para>
	/// </remarks>
	public double? SellerBonus { get; set; }

	/// <summary>
	/// Data di vendita del veicolo
	/// </summary>
	/// <seealso cref="PurchaseDate"/>
	public DateTime? SellingDate { get; set; }

	/// <summary>
	/// Prezzo riservato (1)
	/// </summary>
	/// <remarks>
	/// <para>Prezzo riservato ad una particolare categoria di clienti</para>
	/// <para>A partire da: 2019-11-27</para>
	/// </remarks>
	public double? SpecialPrice1 { get; set; }

	/// <summary>
	/// Prezzo riservato (2)
	/// </summary>
	/// <remarks>
	/// <para>Prezzo riservato ad una particolare categoria di clienti</para>
	/// <para>A partire da: 2019-11-27</para>
	/// </remarks>
	public double? SpecialPrice2 { get; set; }

	/// <summary>
	/// Percentuale IVA
	/// </summary>
	public double? VatRate { get; set; }

	/// <summary>
	/// Prezzo per grandi acquirenti
	/// </summary>
	/// <remarks>
	/// <para>Prezzo sul web per i grandi acquirenti (es. autonoleggi)</para>
	/// </remarks>
	public double? WholesaleWebPrice { get; set; }
}
