/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.5382481Z
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
/// Campagne attive
/// </summary>
public class DealerData_Campaigns
{
	/// <summary>
	/// Ammontare del premio
	/// </summary>
	/// <seealso cref="BonusMultiplicative"/>
	public double BonusAmount { get; set; }

	/// <summary>
	/// Descrizione del premio
	/// </summary>
	public string? BonusDescription { get; set; }

	/// <summary>
	/// ID premio
	/// </summary>
	public string BonusId { get; set; }

	/// <summary>
	/// Premio moltiplicativo
	/// </summary>
	/// <remarks>
	/// <para>Indica se l'importo del premio è espresso come un fattore moltiplicativo (es. percentuale) anziché additivo (importo fisso).</para>
	/// </remarks>
	/// <seealso cref="BonusAmount"/>
	public bool BonusMultiplicative { get; set; }

	/// <summary>
	/// Codice marca
	/// </summary>
	public string BrandCode { get; set; }

	/// <summary>
	/// ID campagna
	/// </summary>
	public string CampaignId { get; set; }

	/// <summary>
	/// Giorni di giacenza dalla fattura
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public int? DaysInStock { get; set; }

	/// <summary>
	/// Rottamazione
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public string? DemolitionOnly { get; set; }

	/// <summary>
	/// Descrizione della campagna
	/// </summary>
	public string? Description { get; set; }

	/// <summary>
	/// Finanziamento
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public string? FinancingOnly { get; set; }

	/// <summary>
	/// Codice dell'alimentazione
	/// </summary>
	/// <remarks>
	/// <para>La campagna si applica solo ai veicoli con l'alimentazione indicata</para>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public string? FuelCode { get; set; }

	/// <summary>
	/// ID elemento
	/// </summary>
	/// <remarks>
	/// <para>Codice univoco dell'elemento.</para>
	/// </remarks>
	public string ItemId { get; set; }

	/// <summary>
	/// Nome della campagna
	/// </summary>
	public string? Label { get; set; }

	/// <summary>
	/// Codice della linea
	/// </summary>
	/// <remarks>
	/// <para>La campagna si applica solo ai veicoli della linea indicata</para>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public string? LineCode { get; set; }

	/// <summary>
	/// Anno del modello
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public string? ModelYear { get; set; }

	/// <summary>
	/// Data finale dell'uscita del veicolo da fabbrica
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public DateTime? ProductionEndDate { get; set; }

	/// <summary>
	/// Data iniziale dell'uscita del veicolo da fabbrica
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public DateTime? ProductionStartDate { get; set; }

	/// <summary>
	/// Stato del veicolo sul DMS
	/// </summary>
	/// <remarks>
	/// <para>La campagna si applica solo ai veicoli con lo status DMS indicato</para>
	/// <para>Valori noti: Ordinato, Virtuale, Assegnato, In stock, Venduto, Da ritirare, Uscito, Richiesto, Stornato, Altro</para>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public string? Status { get; set; }

	/// <summary>
	/// Permuta
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public string? TradeInOnly { get; set; }

	/// <summary>
	/// Data di inizio della validità della campagna
	/// </summary>
	public DateTime ValidSince { get; set; }

	/// <summary>
	/// Data di fine della validità della campagna
	/// </summary>
	public DateTime ValidUntil { get; set; }

	/// <summary>
	/// Codice del tipo di veicolo
	/// </summary>
	/// <remarks>
	/// <para>La campagna si applica solo ai veicoli del tipo indicato</para>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public string? VehicleTypeCode { get; set; }

	/// <summary>
	/// Codice della sede del contratto
	/// </summary>
	/// <remarks>
	/// <para>La campagna si applica solo ai veicoli con contratto aperto nella sede indicata</para>
	/// <para>A partire da: 2024-06-10</para>
	/// </remarks>
	public string? VenueCode { get; set; }
}
