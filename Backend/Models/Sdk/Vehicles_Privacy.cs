/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.6409407Z
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
/// Dati relativi ai consensi sulla privacy
/// </summary>
/// <remarks>
/// <para>A partire da: 2022-01-18</para>
/// </remarks>
public class Vehicles_Privacy
{
	/// <summary>
	/// Consenso privacy per legge 104
	/// </summary>
	public bool? Bmw104Dealer { get; set; }

	/// <summary>
	/// BMW: data del consenso espresso per tutti i consensi BMW
	/// </summary>
	public DateTime BmwConsentDate { get; set; }

	/// <summary>
	/// Consenso a comunicazioni via email dal dealer
	/// </summary>
	public bool? BmwEmailDealer { get; set; }

	/// <summary>
	/// Consenso a comunicazioni via email da NSC
	/// </summary>
	public bool? BmwEmailNsc { get; set; }

	/// <summary>
	/// Consenso a comunicazioni via posta dal dealer
	/// </summary>
	public bool? BmwMailDealer { get; set; }

	/// <summary>
	/// Consenso a comunicazioni via posta da NSC
	/// </summary>
	public bool? BmwMailNsc { get; set; }

	/// <summary>
	/// Consenso a trattamento a fini marketing dal dealer
	/// </summary>
	public bool? BmwMarketingDealer { get; set; }

	/// <summary>
	/// Consenso a trattamento a fini marketing da NSC
	/// </summary>
	public bool? BmwMarketingNsc { get; set; }

	/// <summary>
	/// Consenso a profilazione dal dealer
	/// </summary>
	public bool? BmwProfileDealer { get; set; }

	/// <summary>
	/// Consenso a profilazione dal dealer
	/// </summary>
	public bool? BmwProfileNsc { get; set; }

	/// <summary>
	/// Consenso a comunicazioni via SMS dal dealer
	/// </summary>
	public bool? BmwSmsDealer { get; set; }

	/// <summary>
	/// Consenso a comunicazioni via SMS da NSC
	/// </summary>
	public bool? BmwSmsNsc { get; set; }

	/// <summary>
	/// Consenso a comunicazioni in-car dal dealer
	/// </summary>
	public bool? BmwVehicleDealer { get; set; }

	/// <summary>
	/// Consenso a comunicazioni in-car da NSC
	/// </summary>
	public bool? BmwVehicleNsc { get; set; }

	/// <summary>
	/// Consenso generale al trattamento dati da terze parti
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-02-09</para>
	/// </remarks>
	public bool? GeneralThirdParty { get; set; }
}
